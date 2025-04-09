"use server";

import { signOut } from "@/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signOutAction() {
	signOut();
	revalidatePath("/");
	redirect("/");
}
