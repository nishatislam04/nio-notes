"use server";

import { signIn } from "@/auth";

export async function signInLinkedInleAction() {
	await signIn("linkedin");
}
