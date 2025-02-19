import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const AI_PROVIDERS = ["Anthropic", "OpenAI", "Google", "Mistral", "Cohere", "HuggingFace", "Llama"];
const FILE_TYPES = ["text", "image", "audio", "video", "pdf"];

const REGEX_PATTERNS = [
    "(credit card|password|SSN)",
    "(invoice|receipt|billing)", 
    "(medical|prescription|diagnosis)",
    "(confidential|internal|NDA)",
    "(report|summary|findings)", 
    "(MP3|WAV|AAC)",
    "(JPEG|PNG|SVG)",
];

const MODEL_MAP: { [key: string]: string[] } = {
    "Anthropic": ["claude-3", "claude-haiku", "claude-sonnet"],
    "OpenAI": ["gpt-4o", "gpt-3.5-turbo"],
    "Google": ["gemini-1.5", "gemini-pro"],
    "Mistral": ["mistral-7b", "mistral-8x7b"],
    "Cohere": ["command-r+", "command-r"],
    "HuggingFace": ["falcon-40b", "bloom-176b"],
    "Llama": ["llama-3", "llama-2-13b"],
};

async function seedRoutingPolicies() {
    console.log("Seeding Routing Policies...");

    for (const fileType of FILE_TYPES) {
        // Creating 3 random policies per file type
        for (let i = 0; i < 3; i++) { 
            const provider = AI_PROVIDERS[Math.floor(Math.random() * AI_PROVIDERS.length)];
            const originalModel = MODEL_MAP[provider][Math.floor(Math.random() * MODEL_MAP[provider].length)];
            const regexPattern = REGEX_PATTERNS[Math.floor(Math.random() * REGEX_PATTERNS.length)];

            let redirectProvider;
            do {
                redirectProvider = AI_PROVIDERS[Math.floor(Math.random() * AI_PROVIDERS.length)];
            } while (redirectProvider === provider);

            const redirectModel = MODEL_MAP[redirectProvider][Math.floor(Math.random() * MODEL_MAP[redirectProvider].length)];

            await prisma.routingPolicy.create({
                data: {
                    provider,
                    originalModel,
                    regexPattern,
                    redirectModel,
                    fileType,
                },
            });

            console.log(`✅ Created policy: ${provider} (${originalModel}) → ${redirectProvider} (${redirectModel}) for ${fileType}`);
        }
    }

    console.log("✅ Seeding Completed!");
}

seedRoutingPolicies()
    .catch((e) => {
        console.error("Error seeding data:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
