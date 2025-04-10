import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import LinkedIn from "next-auth/providers/linkedin";
import prisma from "./prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		GitHub({
			allowDangerousEmailAccountLinking: true,
			profile(profile) {
				return {
					name: profile.name,
					username: profile.login,
					email: profile.email,
					image: profile.avatar_url,
				};
			},
		}),
		Google({
			allowDangerousEmailAccountLinking: true,
			profile(profile) {
				return {
					name: profile.name,
					email: profile.email,
					username: profile.name.replace(/\s+/g, ""),
					image: profile.picture,
				};
			},
		}),
		LinkedIn({
			allowDangerousEmailAccountLinking: true,
			profile(profile) {
				return {
					name: profile.name,
					email: profile.email,
					username: profile.name.toLowerCase().replace(/\s+/g, ""),
					image: profile.picture,
				};
			},
		}),
	],

	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.username = user.username;
				token.id = user.id;
			}
			return token;
		},

		async session({ session, token }) {
			if (session.user) {
				session.user.username = token.username;
				session.user.id = token.id;
			}
			return session;
		},

		// async signIn({ user }) {
		// 	const existingUser = await prisma.user.findUnique({
		// 		where: { email: user.email },
		// 	});

		// 	if (!existingUser) {
		// 		await prisma.user.create({
		// 			data: {
		// 				name: user.name,
		// 				username: user.username,
		// 				email: user.email,
		// 				image: user.image,
		// 			},
		// 		});
		// 	}

		// 	return true;
		// },
	},

	session: {
		strategy: "jwt",
	},
});
