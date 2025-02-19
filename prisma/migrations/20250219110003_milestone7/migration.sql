/*
  Warnings:

  - Made the column `fileType` on table `routing_policies` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "file_upload_routes_fileType_key";

-- DropIndex
DROP INDEX "routing_policies_fileType_key";

-- AlterTable
ALTER TABLE "routing_policies" ALTER COLUMN "fileType" SET NOT NULL,
ALTER COLUMN "fileType" SET DEFAULT 'pdf';
