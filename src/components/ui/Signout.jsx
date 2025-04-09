import { signOutAction } from "@/system/action/auth/signout";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export function SignOut() {
	const router = useRouter();
	const { data: session } = useSession();
	console.log("Session in UI: signout", session);
	function handleSignout() {
		signOutAction();
		router.push("/");
		router.refresh();
	}
	return (
		<Modal
			size="xs"
			variant="light"
			color="red"
			toConfirm={() => handleSignout()}
		>
			Sign Out
		</Modal>
	);
}
