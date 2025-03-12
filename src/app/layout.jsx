import '@mantine/core/styles.css';
import './globals.css';

export const metadata = {
	title: 'root layout',
	description: 'root layout',
};

export default async function RootLayout({ children }) {
	return <>{children}</>;
}
