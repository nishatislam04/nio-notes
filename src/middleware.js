// middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
	const session = true; // Example: Get session from cookies
	// const session = false; // Example: Get session from cookies

	if (!session) {
		return NextResponse.redirect(new URL("/notes", request.url));
	}

	return NextResponse.redirect(new URL("/home", request.url));
}

export const config = {
	matcher: ["/"],
};
