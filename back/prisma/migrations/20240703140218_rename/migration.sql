/*
  Warnings:

  - You are about to drop the `idea` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "idea";

-- CreateTable
CREATE TABLE "ideas" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ideas_pkey" PRIMARY KEY ("id")
);
