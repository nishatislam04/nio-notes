import AuthLayout from "@/components/layouts/AuthLayout";
import {
	ColorSchemeScript,
	MantineProvider,
	mantineHtmlProps,
} from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { SessionProvider } from "next-auth/react";

export const metadata = {
	title: "Auth layout",
	description: "Auth layout",
};

export default function AuthRootLayout({ children }) {
	return (
		<html lang="en" {...mantineHtmlProps}>
			<head>
				<ColorSchemeScript />
			</head>
			<body className="auth-body">
				<MantineProvider>
					<SessionProvider>
						<AuthLayout>
							<ModalsProvider>{children}</ModalsProvider>
						</AuthLayout>
					</SessionProvider>
				</MantineProvider>
			</body>
		</html>
	);
}
