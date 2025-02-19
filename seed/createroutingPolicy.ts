import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    await prisma.routingPolicy.createMany({
        data: [
            { provider: "openai", originalModel: "gpt-4o", regexPattern: "(?i)(credit card)", redirectModel: "gemini-alpha" },
            { provider: "anthropic", originalModel: "claude-2", regexPattern: "(?i)(summary)", redirectModel: "claude-3" },
        ],
    });
    console.log('Routing policies seeded.');
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
