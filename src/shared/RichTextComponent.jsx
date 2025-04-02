import { baseExtensions } from "@/lib/rteExtensions";
import { ScrollArea } from "@mantine/core";
import { RichTextEditor } from "@mantine/tiptap";
import { BubbleMenu, useEditor } from "@tiptap/react";
import { useEffect } from "react";
import {
	IconBold,
	IconItalic,
	IconUnderline,
	IconStrikethrough,
	IconHighlight,
	IconList,
	IconListNumbers,
	IconSeparator,
	IconLink,
	IconUnlink,
	IconAlignLeft,
	IconAlignCenter,
	IconAlignRight,
	IconAlignJustified,
	IconArrowBackUp,
	IconArrowForwardUp,
	IconH1,
	IconH2,
	IconH3,
	IconCode,
} from "@tabler/icons-react";

/** 🏆 Define Icons with Consistent Size & Stroke */
const BoldIcon = () => <IconBold size={16} stroke={2.5} />;
const ItalicIcon = () => <IconItalic size={16} stroke={2.5} />;
const UnderlineIcon = () => <IconUnderline size={16} stroke={2.5} />;
const StrikethroughIcon = () => <IconStrikethrough size={16} stroke={2.5} />;
const HighlightIcon = () => <IconHighlight size={16} stroke={2.5} />;
const ListIcon = () => <IconList size={16} stroke={2.5} />;
const OrderedListIcon = () => <IconListNumbers size={16} stroke={2.5} />;
const SeparatorIcon = () => <IconSeparator size={16} stroke={2.5} />;
const LinkIcon = () => <IconLink size={16} stroke={2.5} />;
const UnlinkIcon = () => <IconUnlink size={16} stroke={2.5} />;
const AlignLeftIcon = () => <IconAlignLeft size={16} stroke={2.5} />;
const AlignCenterIcon = () => <IconAlignCenter size={16} stroke={2.5} />;
const AlignRightIcon = () => <IconAlignRight size={16} stroke={2.5} />;
const AlignJustifyIcon = () => <IconAlignJustified size={16} stroke={2.5} />;
const UndoIcon = () => <IconArrowBackUp size={16} stroke={2.5} />;
const RedoIcon = () => <IconArrowForwardUp size={16} stroke={2.5} />;
const H1Icon = () => <IconH1 size={16} stroke={2.5} />;
const H2Icon = () => <IconH2 size={16} stroke={2.5} />;
const H3Icon = () => <IconH3 size={16} stroke={2.5} />;
const CodeIcon = () => <IconCode size={16} stroke={2.5} />;

/** 🎨 Color Options */
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
		<RichTextEditor editor={editor} className="rte-container" variant="subtle">
			{/* ✨ Bubble Menu */}
			{editor && (
				<BubbleMenu
					editor={editor}
					className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg border border-gray-300 dark:border-gray-700 rounded-lg p-1 flex gap-2"
				>
					<RichTextEditor.ControlsGroup>
						<RichTextEditor.Bold
							icon={BoldIcon}
							className="text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 p-1 rounded-md"
						/>
						<RichTextEditor.Italic
							icon={ItalicIcon}
							className="text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 p-1 rounded-md"
						/>
						<RichTextEditor.Underline
							icon={UnderlineIcon}
							className="text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 p-1 rounded-md"
						/>
						<RichTextEditor.Link
							icon={LinkIcon}
							className="text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 p-1 rounded-md"
						/>
						<RichTextEditor.Code
							icon={CodeIcon}
							className="text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 p-1 rounded-md"
						/>
					</RichTextEditor.ControlsGroup>
				</BubbleMenu>
			)}

			{editable && (
				<RichTextEditor.Toolbar>
					{/* 🏆 Formatting */}
					<RichTextEditor.Bold icon={BoldIcon} />
					<RichTextEditor.Italic icon={ItalicIcon} />
					<RichTextEditor.Underline icon={UnderlineIcon} />
					<RichTextEditor.Strikethrough icon={StrikethroughIcon} />

					{/* ✨ Highlight & Clear */}
					<RichTextEditor.Highlight icon={HighlightIcon} />
					<RichTextEditor.ClearFormatting />

					{/* 📖 Typography */}
					<RichTextEditor.H1 icon={H1Icon} />
					<RichTextEditor.H2 icon={H2Icon} />
					<RichTextEditor.H3 icon={H3Icon} />

					{/* 🔢 Lists */}
					<RichTextEditor.BulletList icon={ListIcon} />
					<RichTextEditor.OrderedList icon={OrderedListIcon} />
					<RichTextEditor.Hr icon={SeparatorIcon} />

					{/* 🖥️ Code */}
					<RichTextEditor.Code icon={CodeIcon} />
					<RichTextEditor.ColorPicker colors={colors} />

					{/* 🔗 Links */}
					<RichTextEditor.Link icon={LinkIcon} />
					<RichTextEditor.Unlink icon={UnlinkIcon} />

					{/* 🏗️ Alignment */}
					<RichTextEditor.AlignLeft icon={AlignLeftIcon} />
					<RichTextEditor.AlignCenter icon={AlignCenterIcon} />
					<RichTextEditor.AlignRight icon={AlignRightIcon} />
					<RichTextEditor.AlignJustify icon={AlignJustifyIcon} />

					{/* 🔄 Undo/Redo */}
					<RichTextEditor.Undo icon={UndoIcon} />
					<RichTextEditor.Redo icon={RedoIcon} />
				</RichTextEditor.Toolbar>
			)}

			{/* 📝 Editor Content */}
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
