-- CreateTable
CREATE TABLE "routing_policies" (
    "id" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "originalModel" TEXT NOT NULL,
    "regexPattern" TEXT NOT NULL,
    "redirectModel" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "routing_policies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "routing_policies_id_key" ON "routing_policies"("id");
