"use client";

export default function ErrorPage({ error, reset }) {
	console.error("🔥 Caught Page Error:", error);

	return (
		<div>
			<h2>Something went wrong!</h2>
			<button onClick={() => reset()}>Try again</button>
		</div>
	);
}
