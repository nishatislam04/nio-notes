"use server";

import { signIn } from "@/auth";

export async function signInLinkedInleAction() {
	return await signIn("linkedin", { redirectTo: "/" });
}
