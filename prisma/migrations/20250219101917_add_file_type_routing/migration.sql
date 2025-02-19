/*
  Warnings:

  - A unique constraint covering the columns `[fileType]` on the table `routing_policies` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "routing_policies" ADD COLUMN     "fileType" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "routing_policies_fileType_key" ON "routing_policies"("fileType");
