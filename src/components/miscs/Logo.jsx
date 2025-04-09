import { Anchor } from "@mantine/core";
import Link from "next/link";

export default function Logo() {
	return (
		<Anchor
			href="/home"
			component={Link}
			className="font-bold text-sm tracking-tight cursor-pointer"
		>
			Nio Note Taking
		</Anchor>
	);
}
