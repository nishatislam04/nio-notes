import { signInGithubAction } from "@/system/action/auth/github";
import { signInGoogleAction } from "@/system/action/auth/google";
import { signInLinkedInleAction } from "@/system/action/auth/linkedin";
import { Button, Card, Stack, Text, Group, Divider } from "@mantine/core";
import {
	IconBrandGithub,
	IconBrandGoogle,
	IconBrandLinkedin,
} from "@tabler/icons-react";

export default function SigninPage() {
	return (
		<Group justify="center" align="center" className="h-screen">
			<Card shadow="xl" padding="xl" radius="md" style={{ width: 400 }}>
				<Text size="xl" fw={600} align="center" mb="md">
					Sign in to Your Account
				</Text>
				<Text size="sm" c="dimmed" align="center" mb="lg">
					Choose your preferred sign-in method
				</Text>

				<Stack>
					<Button
						size="lg"
						fullWidth
						leftSection={<IconBrandGoogle size={20} />}
						variant="outline"
						onClick={signInGoogleAction}
					>
						Sign in with Google
					</Button>

					<Button
						size="lg"
						fullWidth
						leftSection={<IconBrandGithub size={20} />}
						variant="outline"
						onClick={signInGithubAction}
					>
						Sign in with GitHub
					</Button>

					<Button
						size="lg"
						fullWidth
						leftSection={<IconBrandLinkedin size={20} />}
						variant="outline"
						onClick={signInLinkedInleAction}
					>
						Sign in with LinkedIn
					</Button>
				</Stack>

				<Divider my="lg" />

				<Text size="xs" c="dimmed" align="center">
					By signing in, you agree to our
					<Text span c="blue">
						Terms of Service
					</Text>
					&
					<Text span c="blue">
						Privacy Policy
					</Text>
					.
				</Text>
			</Card>
		</Group>
	);
}
