import { RichTextComponent } from "@/shared/RichTextComponent";
import { useHydratedNoteStore } from "@/hooks/useHydratedNoteStore";

export default function NotePreview() {
	const { content, hydrated } = useHydratedNoteStore();

	if (!hydrated) return <p>Loading...</p>;

	return <RichTextComponent editable={false} content={content} />;
}
