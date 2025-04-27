import Breadcrumb from "@/components/ui/Breadcrumbs";
import Session from "@/lib/Session";
import NoteComponent from "@/shared/NoteComponent";

const breadcrumbItems = [
	{ title: "home", href: "/home" },
	{ title: "notes", href: "/home/notes" },
];

export default async function NoteCreatePage() {
	const sessionData = await Session.getAuthenticatedUser();
	const session = sessionData.user.id;

	return (
		<div className="">
			<Breadcrumb items={breadcrumbItems} />
			<div className="mt-4">
				<div className="my-8">note title input</div>
				<NoteComponent showSaveButton={false} user={session} />
			</div>
		</div>
	);
}
