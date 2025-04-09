import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;

const prisma =
	globalForPrisma.prisma ||
	new PrismaClient({
		log: ["query", "info", "warn", "error"], // ✅ Enable logging to debug issues
	});

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
