-- CreateTable
CREATE TABLE "idea" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "idea_pkey" PRIMARY KEY ("id")
);
