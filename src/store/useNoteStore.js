import Settings from "@/lib/Settings";
import { create } from "zustand";
import { persist } from "zustand/middleware";
export const useNoteStore = create(
	persist(
		(set) => ({
			content: null,
			setContent: (newContent) => {
				set({ content: newContent });
				localStorage.setItem(
					Settings.localNoteKeyName,
					JSON.stringify(newContent)
				);
			},
		}),
		{ name: Settings.localNoteKeyName }
	)
);
