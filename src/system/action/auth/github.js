"use server";

import { signIn } from "@/auth";

export async function signInGithubAction() {
	await signIn("github");
}
