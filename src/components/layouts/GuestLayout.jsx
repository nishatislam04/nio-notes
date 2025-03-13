'use client';
import { Anchor, AppShell, Burger, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import Logo from '../miscs/Logo';

const navItems = [{ label: 'Home', value: '/notes' }];

export default function GuestLayout({ children }) {
	const [opened, { toggle }] = useDisclosure();
	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{
				width: 300,
				breakpoint: 'sm',
				collapsed: { desktop: true, mobile: !opened },
			}}
			padding="md"
		>
			<AppShell.Header>
				<Group h="100%" px="md">
					<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
					<Group justify="space-between" style={{ flex: 1 }}>
						<Group ml="md">
							<Logo />
						</Group>
						<Group className="" ml="xl" visibleFrom="sm">
							<ul className="ml-auto">
								{navItems.map((item) => {
									return (
										<Anchor key={item.value} component={Link} href={item.value}>
											<li className="">{item.label}</li>
										</Anchor>
									);
								})}
							</ul>
						</Group>
					</Group>
				</Group>
			</AppShell.Header>

			<AppShell.Navbar py="md" px={4}>
				<ul className="px-4">
					{navItems.map((item) => {
						return (
							<Anchor key={item.value} component={Link} href={item.value}>
								<li className="py-2 bg-gray-200 px-4">{item.label}</li>
							</Anchor>
						);
					})}
				</ul>
			</AppShell.Navbar>

			<AppShell.Main>{children}</AppShell.Main>
		</AppShell>
	);
}
