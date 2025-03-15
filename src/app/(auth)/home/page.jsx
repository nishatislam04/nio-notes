import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function AuthHomePage() {
	const session = await auth();
	if (!session) redirect("/signin");

	return <div className="">test</div>;
}
