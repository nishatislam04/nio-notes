import {
	signInGithubAction,
	signInGoogleAction,
	signInLinkedInleAction,
} from "@/system/action/auth/signin";
import { Button, Group } from "@mantine/core";

export default function SigninPage() {
	return (
		<Group justify="flex-end" gap="xl">
			<form action={signInGithubAction}>
				<Button type="submit" size="xl">
					Signin with GitHub
				</Button>
			</form>
			<form action={signInGoogleAction}>
				<Button type="submit" size="xl">
					Signin with Google
				</Button>
			</form>
			<form action={signInLinkedInleAction}>
				<Button type="submit" size="xl">
					Signin with Linkedin
				</Button>
			</form>
		</Group>
	);
}
