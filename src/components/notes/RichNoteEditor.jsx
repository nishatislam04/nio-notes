import { RichTextComponent } from "@/shared/RichTextComponent";
import { useDebouncedCallback } from "@mantine/hooks";

export default function RichNoteEditor({ content, hydrated, setContent }) {
	const debouncedSave = useDebouncedCallback((newContent) => {
		setContent(newContent);
	}, 1000);

	if (!hydrated)
		return (
			<div className="space-y-4">
				<div className="animate-pulse h-12 bg-gray-200 dark:bg-gray-700 rounded-md w-full" />
				<div className="animate-pulse h-48 bg-gray-200 dark:bg-gray-700 rounded-md w-full" />
			</div>
		);

	return (
		<RichTextComponent
			editable={true}
			content={content}
			onUpdate={debouncedSave}
		/>
	);
}
