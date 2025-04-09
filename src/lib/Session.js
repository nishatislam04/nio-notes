import { auth } from "@/auth";

class Session {
	static async getAuthenticatedUser() {
		const user = await auth();

		if (!user) return null;

		return user;
	}
}

export default Session;
