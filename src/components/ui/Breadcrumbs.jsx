import { Anchor, Breadcrumbs } from "@mantine/core";
import Link from "next/link";

export default function Breadcrumb({ items }) {
	return (
		<Breadcrumbs>
			{items.map((item, index) => (
				<Anchor component={Link} href={item.href} key={index}>
					{item.title}
				</Anchor>
			))}
		</Breadcrumbs>
	);
}
