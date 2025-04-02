import { NextResponse } from "next/server";

export async function middleware(request) {
	// Get the session token from the cookies
	const session = request.cookies.get("authjs.session-token")?.value;

	// If no session token is found, redirect to the login page or notes
	if (!session) {
		return NextResponse.redirect(new URL("/notes", request.url));
	}

	// If a session token is found, redirect to the home page
	return NextResponse.redirect(new URL("/home", request.url));
}

export const config = {
	matcher: ["/"], // Apply middleware only to the root URL
};
