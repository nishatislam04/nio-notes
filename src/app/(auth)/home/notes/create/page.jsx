import NoteComponent from "@/shared/NoteComponent";

export default function NoteCreatePage() {
	return (
		<div className="">
			<p className="ml-2">breadcrumbs</p>
			<NoteComponent showSaveButton={false} />
		</div>
	);
}
