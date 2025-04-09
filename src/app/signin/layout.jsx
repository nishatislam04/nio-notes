import SigninLayout from "@/components/layouts/SigninLayout";
import { MantineProvider, mantineHtmlProps } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";

export const metadata = {
	title: "Guest layout",
	description: "Guest layout",
};

export default function SigninRootLayout({ children }) {
	return (
		<html lang="en" {...mantineHtmlProps}>
			<body className="signin-body">
				<MantineProvider>
					<SigninLayout>
						<ModalsProvider>{children}</ModalsProvider>
					</SigninLayout>
				</MantineProvider>
			</body>
		</html>
	);
}
