"use server";

import Session from "@/lib/Session";
import prisma from "@/prisma";

export async function saveNoteToDatabase(noteContent) {
	const sessionData = await Session.getAuthenticatedUser();
	const userId = sessionData?.user?.id;

	if (!userId) throw new Error("User not authenticated");

	const descriptionWords = noteContent.split(" ");
	const title =
		descriptionWords.length > 5
			? descriptionWords.slice(0, 5).join(" ") // First 5 words
			: noteContent.trim(); // Less than 5 words, just use the description as title

	try {
		// Check if the user has any note
		const lastNote = await prisma.note.findFirst({
			where: { userId },
			orderBy: { updatedAt: "desc" }, // get the last edited
		});

		if (lastNote) {
			// ✅ Update the last note
			await prisma.note.update({
				where: { id: lastNote.id },
				data: { description: noteContent },
			});
			return lastNote.id;
		} else {
			// ✅ Create a new one
			const newNote = await prisma.note.create({
				data: {
					userId,
					title: title,
					description: noteContent,
					isPublic: false,
				},
			});
			return newNote.id;
		}
	} catch (error) {
		console.error("❌ Error saving note:", error);
		throw new Error("Failed to save note");
	}
}
