"use server";

import Session from "@/lib/Session";
import prisma from "@/prisma";

export async function saveNoteToDatabase(noteContent) {
	const session = (await Session.getAuthenticatedUser()) || null;

	if (!session) new Error("Auth user Id not found");

	try {
		await prisma.note.create({
			data: {
				userId: session.id,
				title: "untitled",
				description: noteContent,
				isPublic: true,
			},
		});
	} catch (error) {
		console.error("Failed to save note:", error);
	}
}
