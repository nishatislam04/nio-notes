import { useHydratedNoteStore } from "@/hooks/useHydratedNoteStore";
import { RichTextComponent } from "@/shared/RichTextComponent";
import { useDebouncedCallback } from "@mantine/hooks";

export default function RichNoteEditor() {
	const { content, setContent, hydrated } = useHydratedNoteStore();

	const debouncedSave = useDebouncedCallback((newContent) => {
		setContent(newContent);
	}, 1000);

	if (!hydrated) return <p>Loading...</p>;

	return (
		<RichTextComponent
			editable={true}
			content={content}
			onUpdate={debouncedSave}
		/>
	);
}
