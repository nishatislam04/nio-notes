import {
	signInGithubAction,
	signInGoogleAction,
	signInLinkedInleAction,
} from "@/system/action/auth/signin";
import { Button, Card, Stack, Text, Group, Divider } from "@mantine/core";
import {
	IconBrandGithub,
	IconBrandGoogle,
	IconBrandLinkedin,
} from "@tabler/icons-react";

export default async function SigninPage() {
	return (
		<Group justify="center" align="center" style={{ height: "100vh" }}>
			<Card shadow="xl" padding="xl" radius="md" style={{ width: 400 }}>
				<Text size="xl" fw={600} align="center" mb="md">
					Sign in to Your Account
				</Text>
				<Text size="sm" c="dimmed" align="center" mb="lg">
					Choose your preferred sign-in method
				</Text>

				<Stack>
					<form action={signInGoogleAction}>
						<Button
							type="submit"
							size="lg"
							fullWidth
							leftSection={<IconBrandGoogle size={20} />}
							variant="outline"
						>
							Sign in with Google
						</Button>
					</form>

					<form action={signInGithubAction}>
						<Button
							type="submit"
							size="lg"
							fullWidth
							leftSection={<IconBrandGithub size={20} />}
							variant="outline"
						>
							Sign in with GitHub
						</Button>
					</form>

					<form action={signInLinkedInleAction}>
						<Button
							type="submit"
							size="lg"
							fullWidth
							leftSection={<IconBrandLinkedin size={20} />}
							variant="outline"
						>
							Sign in with LinkedIn
						</Button>
					</form>
				</Stack>

				<Divider my="lg" />

				<Text size="xs" c="dimmed" align="center">
					By signing in, you agree to our{" "}
					<Text span c="blue">
						Terms of Service
					</Text>{" "}
					&{" "}
					<Text span c="blue">
						Privacy Policy
					</Text>
					.
				</Text>
			</Card>
		</Group>
	);
}
