'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import useLocalStorageNote from '../hooks/useLocalStorageNote';

const NoteContext = createContext();

/**
 * NoteProvider to manage note state globally.
 * Handles saving, updating, and clearing notes.
 */
export function NoteProvider({ children }) {
	const [storedNote, setStoredNote] = useLocalStorageNote();
	const [note, setNote] = useState(null);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setNote(storedNote);
		}
	}, [storedNote, note, setStoredNote]);

	const updateNote = (newNote) => {
		setNote(newNote);
		setStoredNote(newNote);
	};

	return (
		<NoteContext.Provider value={{ note, updateNote }}>
			{children}
		</NoteContext.Provider>
	);
}
export function useNote() {
	return useContext(NoteContext);
}
