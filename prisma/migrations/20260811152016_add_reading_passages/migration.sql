-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "passageId" TEXT;

-- CreateTable
CREATE TABLE "ReadingPassage" (
    "id" TEXT NOT NULL,
    "module" TEXT NOT NULL DEFAULT 'english',
    "level" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ReadingPassage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_passageId_fkey" FOREIGN KEY ("passageId") REFERENCES "ReadingPassage"("id") ON DELETE CASCADE ON UPDATE CASCADE;
