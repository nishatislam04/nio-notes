"use client"; // Make sure to mark this as client-side

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
	// Create submit handlers to call server actions
	const handleGoogleSignIn = async (e) => {
		e.preventDefault(); // Prevent form default behavior (page reload)
		await signInGoogleAction(); // Trigger Google sign-in action
	};

	const handleGithubSignIn = async (e) => {
		e.preventDefault(); // Prevent form default behavior (page reload)
		await signInGithubAction(); // Trigger GitHub sign-in action
	};

	const handleLinkedinSignIn = async (e) => {
		e.preventDefault(); // Prevent form default behavior (page reload)
		await signInLinkedInleAction(); // Trigger LinkedIn sign-in action
	};

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
					{/* Google Sign-In Form */}
					<form onSubmit={handleGoogleSignIn}>
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

					{/* GitHub Sign-In Form */}
					<form onSubmit={handleGithubSignIn}>
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

					{/* LinkedIn Sign-In Form */}
					<form onSubmit={handleLinkedinSignIn}>
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
