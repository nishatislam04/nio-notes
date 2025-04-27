"use client";

import { Button, Title, ScrollArea } from "@mantine/core";
import { useState, useEffect } from "react";

export default function Error({ error, reset }) {
	const [CodeHighlight, setCodeHighlight] = useState(null);
	const message = error.message || "A global error occurred.";

	useEffect(() => {
		import("@mantine/code-highlight").then((module) => {
			setCodeHighlight(() => module.CodeHighlight);
		});
	}, []);

	return (
		<section className="relative mx-auto flex w-full max-w-screen-xl flex-col">
			<div className="mt-4 flex w-full flex-col items-start justify-center gap-4">
				<Title order={1} className="text-left">
					Something Went Wrong While Showing Homepage!
				</Title>

				<ScrollArea
					h={500}
					className="w-full"
					offsetScrollbars
					scrollbarSize={20}
					scrollHideDelay={3000}
					scrollbars="y"
				>
					{CodeHighlight ? (
						<CodeHighlight
							className="h-[30vh] max-h-[30vh] px-12 py-12 flex justify-end"
							code={`${message}`}
							language="jsx"
							copyLabel="Copy button code"
							copiedLabel="Copied!"
						/>
					) : (
						<pre className="h-[30vh] max-h-[30vh] w-[70vw] max-w-[85vw] overflow-auto px-12 py-12">
							{message}
						</pre>
					)}
				</ScrollArea>
			</div>

			<Button
				variant="light"
				onClick={reset}
				className="absolute right-0 top-5"
			>
				Reload
			</Button>
		</section>
	);
}
