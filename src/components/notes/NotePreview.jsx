import { Code, ScrollArea } from '@mantine/core';
import { Link, RichTextEditor } from '@mantine/tiptap';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Color from '@tiptap/extension-color';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';
import { all, createLowlight } from 'lowlight';
import { useEffect } from 'react';
import { useNote } from '@/context/NoteContext';

const lowlight = createLowlight(all);

export default function NotePreview() {
	const { note } = useNote();

	const editor = useEditor({
		content: note,
		editable: false,
		extensions: [
			StarterKit,
			Underline,
			Link,
			Highlight,
			TextStyle,
			Color,
			Code,
			TextAlign.configure({ types: ['heading', 'paragraph'] }),
			CodeBlockLowlight.configure({ lowlight }),
		],
		immediatelyRender: false,
	});
	useEffect(() => {
		if (editor && note) {
			editor.commands.setContent(note, false);
		}
	}, [note, editor]);

	if (!editor) return <p>Loading preview...</p>;
	if (!note)
		return <p className="text-gray-400">Keep Your Note Close to You</p>;

	return (
		<RichTextEditor editor={editor} className="rte-container">
			<ScrollArea h={450} offsetScrollbars scrollbarSize={14}>
				<RichTextEditor.Content />
			</ScrollArea>
		</RichTextEditor>
	);
}
