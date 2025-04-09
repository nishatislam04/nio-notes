import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function AuthHomePage() {
	const session = await auth();
	console.log("session from home", session);
	if (!session) redirect("/signin");

	return <div className="">test</div>;
}
