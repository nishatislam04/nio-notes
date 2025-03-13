'use client';

import NotePreview from '@/components/notes/NotePreview';
import RichNoteEditor from '@/components/notes/RichNoteEditor';
import { NoteProvider } from '@/context/NoteContext';
import { Tabs } from '@mantine/core';
import { IconEyeCheck, IconPencilBolt } from '@tabler/icons-react';

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
							<RichNoteEditor />
						</section>
					</Tabs.Panel>

					{/* Note Preview */}
					<Tabs.Panel value="preview">
						<section className="min-h-[calc(100dvh-180px)] mt-1 w-full h-full">
							<NotePreview />
						</section>
					</Tabs.Panel>
				</NoteProvider>
			</Tabs>
		</div>
	);
}
