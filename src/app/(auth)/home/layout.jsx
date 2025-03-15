import AuthLayout from "@/components/layouts/AuthLayout";
import {
	ColorSchemeScript,
	MantineProvider,
	mantineHtmlProps,
} from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";

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
					<AuthLayout>
						<ModalsProvider>{children}</ModalsProvider>
					</AuthLayout>
				</MantineProvider>
			</body>
		</html>
	);
}
