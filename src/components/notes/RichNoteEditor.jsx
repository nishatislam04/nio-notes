import { useNote } from '@/context/NoteContext';
import { Code, ScrollArea } from '@mantine/core';
import { Link, RichTextEditor } from '@mantine/tiptap';
import { IconBracketsAngle } from '@tabler/icons-react';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Color from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';
import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import { BubbleMenu, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { all, createLowlight } from 'lowlight';
import { useEffect } from 'react';

const colors = [
	'#25262b',
	'#868e96',
	'#fa5252',
	'#e64980',
	'#be4bdb',
	'#7950f2',
	'#4c6ef5',
	'#228be6',
	'#15aabf',
	'#12b886',
	'#40c057',
	'#82c91e',
	'#fab005',
	'#fd7e14',
];

const lowlight = createLowlight(all);

export default function RichNoteEditor() {
	const { note, updateNote } = useNote();
	const inlineCodeIcon = () => <IconBracketsAngle size={16} />;

	const editor = useEditor({
		extensions: [
			StarterKit.configure({ codeBlock: false }),
			Underline,
			Link,
			Highlight,
			TextStyle,
			Color,
			Code,
			TextAlign.configure({ types: ['heading', 'paragraph'] }),
			Placeholder.configure({ placeholder: 'Keep Your Note Close to You' }),
			CodeBlockLowlight.configure({ lowlight }),
		],
		content: note,
		onUpdate: ({ editor }) => {
			updateNote(editor.getHTML());
		},
		immediatelyRender: false,
	});

	useEffect(() => {
		if (editor && note) {
			editor.commands.setContent(note, false);
		}
	}, [note, editor]);

	if (!editor) return <p>Loading editor...</p>;
	return (
		<RichTextEditor editor={editor} className="rte-container">
			{editor && (
				<BubbleMenu editor={editor}>
					<RichTextEditor.ControlsGroup>
						<RichTextEditor.Bold />
						<RichTextEditor.Italic />
						<RichTextEditor.Underline />
						<RichTextEditor.Link />
						<RichTextEditor.Code icon={inlineCodeIcon} />
					</RichTextEditor.ControlsGroup>
				</BubbleMenu>
			)}
			<RichTextEditor.Toolbar sticky stickyOffset={60}>
				<RichTextEditor.ControlsGroup>
					<RichTextEditor.Bold />
					<RichTextEditor.Italic />
					<RichTextEditor.Underline />
					<RichTextEditor.Strikethrough />
					<RichTextEditor.ClearFormatting />
					<RichTextEditor.Highlight />
				</RichTextEditor.ControlsGroup>

				<RichTextEditor.ControlsGroup>
					<RichTextEditor.CodeBlock />
					<RichTextEditor.Code icon={inlineCodeIcon} />
				</RichTextEditor.ControlsGroup>

				<RichTextEditor.ControlsGroup>
					<RichTextEditor.H1 />
					<RichTextEditor.H2 />
					<RichTextEditor.H3 />
				</RichTextEditor.ControlsGroup>

				<RichTextEditor.ControlsGroup>
					<RichTextEditor.ColorPicker colors={colors} />
					<RichTextEditor.UnsetColor />
				</RichTextEditor.ControlsGroup>

				<RichTextEditor.ControlsGroup>
					<RichTextEditor.Blockquote />
					<RichTextEditor.Hr />
					<RichTextEditor.BulletList />
					<RichTextEditor.OrderedList />
				</RichTextEditor.ControlsGroup>

				<RichTextEditor.ControlsGroup>
					<RichTextEditor.Link />
					<RichTextEditor.Unlink />
				</RichTextEditor.ControlsGroup>

				<RichTextEditor.ControlsGroup>
					<RichTextEditor.AlignLeft />
					<RichTextEditor.AlignCenter />
					<RichTextEditor.AlignJustify />
					<RichTextEditor.AlignRight />
				</RichTextEditor.ControlsGroup>

				<RichTextEditor.ControlsGroup>
					<RichTextEditor.Undo />
					<RichTextEditor.Redo />
				</RichTextEditor.ControlsGroup>
			</RichTextEditor.Toolbar>

			<ScrollArea h={350} offsetScrollbars scrollbarSize={14}>
				<RichTextEditor.Content />
			</ScrollArea>
		</RichTextEditor>
	);
}
