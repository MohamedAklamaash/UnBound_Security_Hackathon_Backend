import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const AI_MODELS = [
  { provider: "Anthropic", model: "claude-3" },
  { provider: "Anthropic", model: "claude-2" },
  { provider: "OpenAI", model: "gpt-4o" },
  { provider: "OpenAI", model: "gpt-3.5-turbo" },
  { provider: "Google", model: "gemini-1.5-pro" },
  { provider: "Google", model: "gemini-1.0" },
  { provider: "Mistral", model: "mistral-7b" },
  { provider: "Cohere", model: "command-r" }
];

async function seedModels() {
  try {
    for (const model of AI_MODELS) {
      await prisma.model.upsert({
        where: { provider_model: { provider: model.provider, model: model.model } },
        update: {},
        create: model,
      });
    }
    console.log("Models seeded successfully");
  } catch (error) {
    console.error("Error seeding models:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedModels();
