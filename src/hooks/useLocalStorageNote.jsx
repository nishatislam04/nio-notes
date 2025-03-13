'use client';

import { useState, useEffect } from 'react';

export default function useLocalStorageNote() {
	const key = 'my-local-note';
	const [value, setValue] = useState(null);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const storedValue = localStorage.getItem(key);
			console.log('getting data from local storage', storedValue);
			setValue(storedValue ? JSON.parse(storedValue) : null);
		}
	}, []);

	const saveValue = (newValue) => {
		try {
			if (typeof window !== 'undefined') {
				localStorage.setItem(key, JSON.stringify(newValue));
				setValue(newValue);
			}
		} catch (error) {
			console.error('Error saving to localStorage', error);
		}
	};

	return [value, saveValue];
}
