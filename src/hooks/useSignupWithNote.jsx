"use client";
import { saveNoteToDatabase } from "@/system/action/notes/save";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const localStorageKey = "my-local-note";

export function useSignupWithNote() {
	const [note, setNote] = useState(null);
	const router = useRouter();

	// Runs only after signup success
	useEffect(() => {
		const tempNote = localStorage.getItem(localStorageKey);
		if (tempNote) {
			setNote(tempNote);
			localStorage.removeItem(localStorageKey);
		}
	}, []);

	// Function to save note after signup
	const saveNote = async () => {
		if (!note) return;
		await saveNoteToDatabase(note); // Save to database
		setNote(null); // Clear state after saving
		router.push("/home");
	};

	return { note, saveNote };
}
