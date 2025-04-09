import { Button, Card, Stack, Text, Group, Divider } from "@mantine/core";
import {
	IconBrandGithub,
	IconBrandGoogle,
	IconBrandLinkedin,
} from "@tabler/icons-react";

import {
	signInGithubAction,
	signInGoogleAction,
	signInLinkedInleAction,
} from "@/system/action/auth/oauth";

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
					{/* Google Sign-In */}
					<form action={signInGoogleAction}>
						<Button
							component="button"
							type="submit"
							size="lg"
							fullWidth
							variant="outline"
							leftSection={<IconBrandGoogle size={20} />}
						>
							Sign in with Google
						</Button>
					</form>

					{/* GitHub Sign-In */}
					<form action={signInGithubAction}>
						<Button
							component="button"
							type="submit"
							size="lg"
							fullWidth
							variant="outline"
							leftSection={<IconBrandGithub size={20} />}
						>
							Sign in with GitHub
						</Button>
					</form>

					{/* LinkedIn Sign-In */}
					<form action={signInLinkedInleAction}>
						<Button
							component="button"
							type="submit"
							size="lg"
							fullWidth
							variant="outline"
							leftSection={<IconBrandLinkedin size={20} />}
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
