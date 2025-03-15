import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function middleware(request) {
	const session = await auth();

	// console.log("session from middleware", session);

	if (!session) {
		return NextResponse.redirect(new URL("/notes", request.url));
	}

	return NextResponse.redirect(new URL("/home", request.url));
}
export const config = {
	matcher: ["/"],
};
