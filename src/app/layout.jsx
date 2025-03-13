import '@mantine/core/styles.css';
import './globals.css';
import '@mantine/tiptap/styles.css';

export const metadata = {
	title: 'root layout',
	description: 'root layout',
};

export default async function RootLayout({ children }) {
	return <>{children}</>;
}
