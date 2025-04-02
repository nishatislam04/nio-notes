import { NextResponse } from "next/server";

export async function middleware(request) {
	const session = request.cookies.get("authjs.session-token")?.value;

	if (!session) {
		return NextResponse.redirect(new URL("/notes", request.url));
	}

	return NextResponse.redirect(new URL("/home", request.url));
}
export const config = {
	matcher: ["/"],
};
