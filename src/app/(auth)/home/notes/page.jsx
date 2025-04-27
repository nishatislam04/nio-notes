import NoteCard from "@/components/notes/NoteCard";
import {
	Anchor,
	AspectRatio,
	Button,
	Card,
	Container,
	SimpleGrid,
	Text,
} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

const mockdata = [
	{
		title: "Top 10 places to visit in Norway this summer",
		image:
			"https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
		date: "August 18, 2022",
	},
	{
		title: "Best forests to visit in North America",
		image:
			"https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
		date: "August 27, 2022",
	},
	{
		title: "Hawaii beaches review: better than you think",
		image:
			"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
		date: "September 9, 2022",
	},
	{
		title: "Mountains at night: 12 best locations to enjoy the view",
		image:
			"https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
		date: "September 12, 2022",
	},
];

export default function AuthNotePage() {
	return (
		<div className="w-full flex flex-col">
			<Anchor
				href="/home/notes/create"
				className="self-end mr-6"
				component={Link}
			>
				<Button>create Note</Button>
			</Anchor>

			<section className="flex flex-col gap-4 mt-12">
				{mockdata.map((note) => (
					<NoteCard note={note} key={note.id || note.date} />
				))}
			</section>
		</div>
	);
}
