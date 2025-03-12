import {
	ColorSchemeScript,
	MantineProvider,
	mantineHtmlProps,
} from '@mantine/core';

export const metadata = {
	title: 'Auth layout',
	description: 'Auth layout',
};

export default function AuthLayout({ children }) {
	return (
		<html lang="en" {...mantineHtmlProps}>
			<head>
				<ColorSchemeScript />
			</head>
			<body className="auth-body">
				<MantineProvider>{children}</MantineProvider>
			</body>
		</html>
	);
}
