import { MantineProvider, mantineHtmlProps } from '@mantine/core';

export const metadata = {
	title: 'Guest layout',
	description: 'Guest layout',
};

export default function GuestLayout({ children }) {
	return (
		<html lang="en" {...mantineHtmlProps}>
			<body className="guest-body">
				<MantineProvider>{children}</MantineProvider>
			</body>
		</html>
	);
}
