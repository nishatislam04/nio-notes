import GuestLayout from "@/components/layouts/GuestLayout";
import { MantineProvider, mantineHtmlProps } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";

export const metadata = {
	title: "Guest layout",
	description: "Guest layout",
};

export default function GuestRootLayout({ children }) {
	return (
		<html lang="en" {...mantineHtmlProps}>
			<body className="guest-body">
				<MantineProvider>
					<GuestLayout>
						<ModalsProvider>{children}</ModalsProvider>
					</GuestLayout>
				</MantineProvider>
			</body>
		</html>
	);
}
