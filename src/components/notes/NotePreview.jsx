import { Code } from '@mantine/core';
import { Link, RichTextEditor } from '@mantine/tiptap';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Color from '@tiptap/extension-color';
import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { all, createLowlight } from 'lowlight';
import { useEffect } from 'react';

const lowlight = createLowlight(all);

export default function NotePreview({ value }) {
	const editor = useEditor({
		content: value,
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
	});

	useEffect(() => {
		if (editor && value) {
			editor.commands.setContent(value, false);
		}
	}, [value, editor]);

	if (!editor) return <p>Loading preview...</p>;
	if (!value)
		return <p className="text-gray-400">Keep Your Note Close to You</p>;

	return (
		<RichTextEditor editor={editor} className="rte-container">
			<RichTextEditor.Content className="min-h-[500px]" />
		</RichTextEditor>
	);
}
