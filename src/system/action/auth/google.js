"use server";

import { signIn } from "@/auth";

export async function signInGoogleAction() {
	return await signIn("google", { redirectTo: "/" });
}
