import { RichTextComponent } from "@/shared/RichTextComponent";

export default function NotePreview({ content, hydrated }) {
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
