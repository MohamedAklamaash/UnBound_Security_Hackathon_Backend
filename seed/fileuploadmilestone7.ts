import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.fileUploadRoute.createMany({
    data: [
      { fileType: "PDF", provider: "anthropic", model: "claude-v1" },
      { fileType: "DOCX", provider: "openai", model: "gpt-4" },
    ],
  });

  console.log("Seeded file upload routes");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
