"use server";

import { signIn } from "@/auth";

export async function signInGithubAction() {
	return await signIn("github", { redirectTo: "/" });
}
