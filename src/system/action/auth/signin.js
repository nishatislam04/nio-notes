"use server";

import { signIn } from "@/auth";

export async function signInGithubAction() {
	await signIn("github", { redirectTo: "/" });
}

export async function signInGoogleAction() {
	await signIn("google", { redirectTo: "/" });
}

export async function signInLinkedInleAction() {
	await signIn("linkedin", { redirectTo: "/" });
}
