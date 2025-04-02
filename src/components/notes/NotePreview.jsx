import { RichTextComponent } from "@/shared/RichTextComponent";
import { useHydratedNoteStore } from "@/hooks/useHydratedNoteStore";

export default function NotePreview() {
	const { content, hydrated } = useHydratedNoteStore();

	if (!hydrated)
		return (
			<div className="animate-pulse min-h-[350px] bg-gray-200 dark:bg-gray-700 rounded-md" />
		);

	return (
		<div className="mt-[8.4rem] md:mt-12 overflow-auto">
			<RichTextComponent editable={false} content={content} />
		</div>
	);
}
