"use client";

import { NoteProvider } from "@/context/NoteContext";
import { Tabs } from "@mantine/core";
import { IconEyeCheck, IconPencilBolt } from "@tabler/icons-react";
import { lazy, Suspense } from "react";

const RichNoteEditor = lazy(() => import("@/components/notes/RichNoteEditor"));
const NotePreview = lazy(() => import("@/components/notes/NotePreview"));

export default function GuestHomePage() {
	const EditIcon = <IconPencilBolt size={16} />;
	const ViewIcon = <IconEyeCheck size={16} />;
	return (
		<div className="min-h-[calc(100dvh-100px)]">
			<Tabs color="yellow" defaultValue="editor" className="h-full">
				<Tabs.List grow>
					<Tabs.Tab value="editor" rightSection={EditIcon}>
						Editor
					</Tabs.Tab>
					<Tabs.Tab value="preview" color="green" rightSection={ViewIcon}>
						Preview
					</Tabs.Tab>
				</Tabs.List>

				<NoteProvider>
					{/* Note Editing */}
					<Tabs.Panel value="editor">
						<section className="min-h-[calc(100dvh-180px)] mt-1 w-full h-full">
							<Suspense fallback={<div>Loading Editor...</div>}>
								<RichNoteEditor />
							</Suspense>
						</section>
					</Tabs.Panel>

					{/* Note Preview */}
					<Tabs.Panel value="preview">
						<section className="min-h-[calc(100dvh-180px)] mt-1 w-full h-full">
							<Suspense fallback={<div>Loading Preview...</div>}>
								<NotePreview />
							</Suspense>
						</section>
					</Tabs.Panel>
				</NoteProvider>
			</Tabs>
		</div>
	);
}
