"use client";

import Settings from "@/lib/Settings";
import { useNoteStore } from "@/store/useNoteStore";
import { useEffect, useMemo, useState } from "react";

export function useHydratedNoteStore() {
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

	// 🔍 Check if content has actual note text
	const hasNote = useMemo(() => {
		if (!content) return false;

		// Strip HTML tags, decode & trim
		const stripped = content
			.replace(/<[^>]+>/g, "")
			.replace(/&nbsp;/g, "")
			.trim();

		return stripped.length > 0;
	}, [content]);

	return { content, setContent, hydrated, hasNote };
}
