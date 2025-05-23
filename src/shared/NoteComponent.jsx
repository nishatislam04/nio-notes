"use client";

import Modal from "@/components/ui/Modal";
import { useHydratedNoteStore } from "@/hooks/useHydratedNoteStore";
import { Tabs } from "@mantine/core";
import { IconEyeCheck, IconPencilBolt } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { lazy, Suspense } from "react";

const RichNoteEditor = lazy(() => import("@/components/notes/RichNoteEditor"));
const NotePreview = lazy(() => import("@/components/notes/NotePreview"));

export default function NoteComponent({ showSaveButton = true, user = null }) {
	const router = useRouter();
	const { content, hydrated, hasNote, debouncedSave } =
		useHydratedNoteStore(user);
	const EditIcon = <IconPencilBolt size={16} />;
	const ViewIcon = <IconEyeCheck size={16} />;

	return (
		<div className="min-h-[calc(100dvh-100px)] bg-gray-100 dark:bg-gray-900 p-4">
			{showSaveButton && (
				<section className="flex justify-end mb-4 min-h-[40px]">
					{hasNote ? (
						<Modal
							body="If you want to save the note, you have to sign in first"
							labelConfirm="Ok, I want to sign in"
							toConfirm={() => router.push("/signin")}
						>
							Save
						</Modal>
					) : (
						<div className="w-[72px] h-[40px] rounded bg-gray-300/10 dark:bg-gray-700/10 animate-pulse" />
					)}
				</section>
			)}

			<Tabs
				color="yellow"
				defaultValue="editor"
				className="h-full"
				keepMounted={false}
			>
				<Tabs.List
					grow
					className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-1 flex overflow-hidden border border-gray-300 dark:border-gray-700"
				>
					<Tabs.Tab
						value="editor"
						rightSection={EditIcon}
						className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 transition-all rounded-lg 
              data-[active]:bg-yellow-500 data-[active]:text-white 
              hover:bg-yellow-100 dark:hover:bg-gray-700"
					>
						Editor
					</Tabs.Tab>

					<Tabs.Tab
						value="preview"
						rightSection={ViewIcon}
						className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 transition-all rounded-lg 
              data-[active]:bg-green-500 data-[active]:text-white 
              hover:bg-green-100 dark:hover:bg-gray-700"
					>
						Preview
					</Tabs.Tab>
				</Tabs.List>

				<Tabs.Panel
					value="editor"
					className="mt-3 p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg"
				>
					<Suspense
						fallback={
							<div className="animate-pulse h-64 bg-gray-200 dark:bg-gray-700 rounded-md" />
						}
					>
						<RichNoteEditor
							hydrated={hydrated}
							content={content}
							debouncedSave={debouncedSave}
						/>
					</Suspense>
				</Tabs.Panel>

				<Tabs.Panel
					value="preview"
					className="mt-3 p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg"
				>
					<Suspense
						fallback={
							<div className="animate-pulse h-64 bg-gray-200 dark:bg-gray-700 rounded-md" />
						}
					>
						<NotePreview content={content} hydrated={hydrated} />
					</Suspense>
				</Tabs.Panel>
			</Tabs>
		</div>
	);
}
