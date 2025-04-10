import Session from "@/lib/Session";
import NoteComponent from "@/shared/NoteComponent";

export default async function NoteCreatePage() {
	const sessionData = await Session.getAuthenticatedUser();
	const session = sessionData.user.id;

	return (
		<div className="">
			<p className="ml-2">breadcrumbs</p>
			<NoteComponent showSaveButton={false} user={session} />
		</div>
	);
}
