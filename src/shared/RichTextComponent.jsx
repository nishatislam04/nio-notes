import { baseExtensions } from "@/lib/rteExtensions";
import { ScrollArea } from "@mantine/core";
import { RichTextEditor } from "@mantine/tiptap";
import { IconBracketsAngle } from "@tabler/icons-react";
import { BubbleMenu, useEditor } from "@tiptap/react";
import { useEffect } from "react";

const colors = [
	"#25262b",
	"#868e96",
	"#fa5252",
	"#e64980",
	"#be4bdb",
	"#7950f2",
	"#4c6ef5",
	"#228be6",
	"#15aabf",
	"#12b886",
	"#40c057",
	"#82c91e",
	"#fab005",
	"#fd7e14",
];

export function RichTextComponent({ editable, content, onUpdate }) {
	const inlineCodeIcon = () => <IconBracketsAngle size={16} />;

	const editor = useEditor({
		extensions: baseExtensions,
		content,
		editable,
		onUpdate: ({ editor }) => {
			if (onUpdate) onUpdate(editor.getHTML());
		},
	});

	useEffect(() => {
		if (editor && content) {
			editor.commands.setContent(content, false);
		}
	}, [content, editor]);

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
			{editable && (
				<RichTextEditor.Toolbar>
					<RichTextEditor.ControlsGroup>
						<RichTextEditor.Bold />
						<RichTextEditor.Italic />
						<RichTextEditor.Underline />
						<RichTextEditor.Strikethrough />
						<RichTextEditor.ClearFormatting />
						<RichTextEditor.Highlight />
					</RichTextEditor.ControlsGroup>

					<RichTextEditor.ControlsGroup>
						<RichTextEditor.H1 />
						<RichTextEditor.H2 />
						<RichTextEditor.H3 />
					</RichTextEditor.ControlsGroup>

					<RichTextEditor.ControlsGroup>
						<RichTextEditor.BulletList />
						<RichTextEditor.OrderedList />
						<RichTextEditor.Blockquote />
						<RichTextEditor.Hr />
					</RichTextEditor.ControlsGroup>

					<RichTextEditor.ControlsGroup>
						<RichTextEditor.CodeBlock />
						<RichTextEditor.Code icon={inlineCodeIcon} />{" "}
					</RichTextEditor.ControlsGroup>

					<RichTextEditor.ControlsGroup>
						<RichTextEditor.ColorPicker colors={colors} />
						<RichTextEditor.UnsetColor />
					</RichTextEditor.ControlsGroup>

					<RichTextEditor.ControlsGroup>
						<RichTextEditor.Link />
						<RichTextEditor.Unlink />
					</RichTextEditor.ControlsGroup>

					<RichTextEditor.ControlsGroup>
						<RichTextEditor.AlignLeft />
						<RichTextEditor.AlignCenter />
						<RichTextEditor.AlignRight />
						<RichTextEditor.AlignJustify />
					</RichTextEditor.ControlsGroup>

					<RichTextEditor.ControlsGroup>
						<RichTextEditor.Undo />
						<RichTextEditor.Redo />
					</RichTextEditor.ControlsGroup>
				</RichTextEditor.Toolbar>
			)}

			<ScrollArea
				h={350}
				offsetScrollbars
				scrollbarSize={14}
				scrollHideDelay={1500}
			>
				<RichTextEditor.Content />
			</ScrollArea>
		</RichTextEditor>
	);
}
