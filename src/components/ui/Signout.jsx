import { signOutAction } from "@/system/action/auth/signout";
import Modal from "./Modal";
import { useRouter } from "next/navigation";

export function SignOut() {
	const router = useRouter();

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
