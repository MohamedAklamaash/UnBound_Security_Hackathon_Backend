/*
  Warnings:

  - A unique constraint covering the columns `[provider,model]` on the table `Model` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Model_provider_key";

-- AlterTable
ALTER TABLE "Model" ADD CONSTRAINT "Model_pkey" PRIMARY KEY ("id");

-- DropIndex
DROP INDEX "Model_id_key";

-- CreateTable
CREATE TABLE "Chat" (
    "id" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "isFileUploaded" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Model_provider_model_key" ON "Model"("provider", "model");

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_provider_model_fkey" FOREIGN KEY ("provider", "model") REFERENCES "Model"("provider", "model") ON DELETE CASCADE ON UPDATE CASCADE;
