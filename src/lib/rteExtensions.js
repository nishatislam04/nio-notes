import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Highlight from "@tiptap/extension-highlight";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Code from "@tiptap/extension-code";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";

const lowlight = createLowlight(all);

export const baseExtensions = [
	StarterKit.configure({ codeBlock: false }),
	Underline,
	Link,
	Highlight,
	TextStyle,
	Color,
	Code,
	TextAlign.configure({ types: ["heading", "paragraph"] }),
	Placeholder.configure({ placeholder: "Keep Your Note Close to You" }),
	CodeBlockLowlight.configure({ lowlight }),
];
