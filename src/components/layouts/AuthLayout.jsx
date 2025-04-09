"use client";
import {
	Anchor,
	AppShell,
	Avatar,
	Burger,
	Button,
	Group,
	Stack,
	Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import Logo from "../miscs/Logo";
import { IconMoon } from "@tabler/icons-react";
import { useSession } from "next-auth/react";
import { SignOut } from "../ui/Signout";

const navItems = [
	{ label: "Profile", href: "/home/profile" },
	{ label: "Settings", href: "/home/settings" },
];

export default function AuthLayout({ children }) {
	const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
	const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
	const { data: session } = useSession();

	const moonIcon = <IconMoon size={15} />;
	return (
		<AppShell
			header={{ height: 50 }}
			navbar={{
				width: 200,
				breakpoint: "sm",
				collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
			}}
			padding="md"
		>
			<AppShell.Header>
				<Group h="100%" px="md">
					<Burger
						opened={mobileOpened}
						onClick={toggleMobile}
						hiddenFrom="sm"
						size="sm"
					/>
					<Burger
						opened={desktopOpened}
						onClick={toggleDesktop}
						visibleFrom="sm"
						size="sm"
					/>
					<section className="mr-auto">
						<Logo />
					</section>

					<Group gap="sm" component="nav" className="ml-auto">
						<Button size="xs" variant="light" px={8}>
							{moonIcon}
						</Button>
						{session ? (
							<SignOut />
						) : (
							<Anchor href="/signin" component={Link}>
								<Button size="xs" variant="light">
									Sign In
								</Button>
							</Anchor>
						)}
					</Group>
				</Group>
			</AppShell.Header>
			<AppShell.Navbar p="md">
				<Stack gap="sm" component="nav" className="mt-auto mb-4">
					{navItems.map((item) => (
						<Anchor
							key={item.href}
							href={item.href}
							component={Link}
							className="w-full"
						>
							<Button size="xs" variant="light" fullWidth>
								{item.label}
							</Button>
						</Anchor>
					))}
					<AppShell.Section className="mt-4">
						<Stack align="left" gap="md">
							<Group position="center" gap="xs">
								<Avatar src={null} radius="xl" size={35} />
								<div>
									<Text size="sm" weight={500}>
										username
									</Text>
									<Text size="xs" c="dimmed">
										user@email
									</Text>
								</div>
							</Group>
						</Stack>
					</AppShell.Section>
				</Stack>
			</AppShell.Navbar>
			<AppShell.Main>{children}</AppShell.Main>
		</AppShell>
	);
}
