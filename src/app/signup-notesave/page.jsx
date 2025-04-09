"use client";
import { useSignupWithNote } from "@/hooks/useSignupWithNote";
import { Loader } from "@mantine/core";
import { useEffect } from "react";

/**
 * Check localStorage have note saved or not after success signin
 */
export default function SignupSuccessPage() {
	const { note, saveNote } = useSignupWithNote();

	useEffect(() => {
		if (note) saveNote();
	}, [note, saveNote]);

	return (
		<div className="flex items-center justify-center min-h-screen bg-green-50 text-center px-4">
			<div className="bg-white shadow-xl rounded-2xl p-10 max-w-md w-full animate-fade-in">
				<h2 className="text-2xl font-bold text-green-700 mb-2">
					Signup Successful! 🎉
				</h2>
				<p className="text-gray-600 mb-6">Redirecting to your homepage...</p>
				<Loader color="green" size="lg" type="dots" className="mx-auto" />
			</div>
		</div>
	);
}
