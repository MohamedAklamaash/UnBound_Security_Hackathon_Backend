-- CreateTable
CREATE TABLE "file_upload_routes" (
    "id" TEXT NOT NULL,
    "fileType" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "file_upload_routes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "file_upload_routes_id_key" ON "file_upload_routes"("id");

-- CreateIndex
CREATE UNIQUE INDEX "file_upload_routes_fileType_key" ON "file_upload_routes"("fileType");
