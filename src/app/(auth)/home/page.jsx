import Session from "@/lib/Session";

export default async function AuthHomePage() {
	const { user: session } = await Session.getAuthenticatedUser();

	console.log(session, "session from home");

	return <div className="">test</div>;
}
