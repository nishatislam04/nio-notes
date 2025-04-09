"use server";

import { signIn } from "@/auth";

export async function signInGithubAction() {
	await signIn("github", { redirectTo: "/signup-notesave" });
}

export async function signInGoogleAction() {
	await signIn("google", { redirectTo: "/signup-notesave" });
}

export async function signInLinkedInleAction() {
	await signIn("linkedin", { redirectTo: "/signup-notesave" });
}
