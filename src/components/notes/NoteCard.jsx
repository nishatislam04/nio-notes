import { Card, Group, Title } from "@mantine/core";

export default function NoteCard({ note }) {
	return (
		<Card
			shadow="sm"
			padding="md"
			radius="md"
			withBorder
			className="w-full hover:shadow-lg transition-all duration-300 bg-white dark:bg-zinc-900"
		>
			<Group>
				<Title order={5} className="text-gray-800 dark:text-white">
					{note.title}
				</Title>
			</Group>
		</Card>
	);
}
