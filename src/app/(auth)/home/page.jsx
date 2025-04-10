import Session from "@/lib/Session";

export default async function AuthHomePage() {
	const sessionData = await Session.getAuthenticatedUser();
	const session = sessionData?.user || null;

	return <div className="">{session?.username} homepage</div>;
}
