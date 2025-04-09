import { Anchor, Button } from "@mantine/core";
import Link from "next/link";

export default function AuthNotePage() {
	return (
		<div className="w-full flex flex-col">
			<Anchor
				href="/home/notes/create"
				className="ml-auto mr-6"
				component={Link}
			>
				<Button>create Note</Button>
			</Anchor>

			<div className="">note listings</div>
		</div>
	);
}
