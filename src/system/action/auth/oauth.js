"use server";

import { signIn } from "@/auth";

export async function signInGithubAction() {
	await signIn("github", { redirectTo: "/home" });
}

export async function signInGoogleAction() {
	await signIn("google", { redirectTo: "/home" });
}

export async function signInLinkedInleAction() {
	await signIn("linkedin", { redirectTo: "/home" });
}
