import SignupSuccessLayout from "@/components/layouts/SignupSuccess";
import { mantineHtmlProps, MantineProvider } from "@mantine/core";

export const metadata = {
	title: "signup success",
	description: "signup success",
};

export default function SignupSuccessRootLayout({ children }) {
	return (
		<html lang="en" {...mantineHtmlProps}>
			<body className="signin-body">
				<MantineProvider>
					<SignupSuccessLayout>{children}</SignupSuccessLayout>
				</MantineProvider>
			</body>
		</html>
	);
}
