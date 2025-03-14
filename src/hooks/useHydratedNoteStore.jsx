"use client";

import Settings from "@/lib/Settings";
import { useNoteStore } from "@/store/useNoteStore";
import { useEffect, useState } from "react";

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

	return { content, setContent, hydrated };
}
