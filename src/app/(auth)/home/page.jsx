import Session from "@/lib/Session";

export default async function AuthHomePage() {
	const { user: session } = (await Session.getAuthenticatedUser()) || null;

	return <div className="">{session?.username} homepage</div>;
}
