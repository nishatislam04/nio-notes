"use client";

import Settings from "@/lib/Settings";
import { useNoteStore } from "@/store/useNoteStore";
import { saveNoteToDatabase } from "@/system/action/notes/save";
import { useDebouncedCallback } from "@mantine/hooks";
import { useEffect, useMemo, useState } from "react";

export function useHydratedNoteStore(user = null) {
	const { content, setContent } = useNoteStore();
	const [hydrated, setHydrated] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const savedContent = localStorage.getItem(Settings.localNoteKeyName);
			if (savedContent) {
				setContent(JSON.parse(savedContent));
			}
			setHydrated(true);
		}
	}, [setContent]);

	// ✅ Auto-save with debounce
	const debouncedSave = useDebouncedCallback(async (newContent) => {
		try {
			if (user) {
				// ✅ Auth user: save to DB
				await saveNoteToDatabase(newContent);

				// 🧠 Update local state after successful save
				setContent(newContent);
				return;
			} else {
				// 🗃️ Guest: save to localStorage
				if (typeof window !== "undefined") {
					localStorage.setItem(
						Settings.localNoteKeyName,
						JSON.stringify(newContent)
					);
				}

				// 💾 Update local state for guest
				setContent(newContent);
			}
		} catch (err) {
			console.error("Failed to save note:", err);
		}
	}, 1000);

	// ✅ Check if the note has actual visible content
	const hasNote = useMemo(() => {
		if (!content) return false;

		// Strip HTML tags, decode & trim
		const stripped = content
			.replace(/<[^>]+>/g, "")
			.replace(/&nbsp;/g, "")
			.trim();

		return stripped.length > 0;
	}, [content]);

	return { content, setContent, hydrated, hasNote, debouncedSave };
}
