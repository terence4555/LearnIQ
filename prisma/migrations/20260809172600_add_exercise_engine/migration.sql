/*
  Warnings:

  - The values [MULTIPLE_CHOICE,MULTIPLE_ANSWER,FILL_IN_BLANK,TRUE_FALSE] on the enum `QuestionType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `createdAt` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `responseRaw` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `responseTimeMs` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `prompt` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `position` on the `QuestionOption` table. All the data in the column will be lost.
  - You are about to drop the column `section` on the `TestAttempt` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `TestAttempt` table. All the data in the column will be lost.
  - Added the required column `answer` to the `Answer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `correctAnswer` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Made the column `level` on table `Question` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "QuestionType_new" AS ENUM ('MCQ', 'FILL_BLANK');
ALTER TABLE "Question" ALTER COLUMN "type" TYPE "QuestionType_new" USING ("type"::text::"QuestionType_new");
ALTER TYPE "QuestionType" RENAME TO "QuestionType_old";
ALTER TYPE "QuestionType_new" RENAME TO "QuestionType";
DROP TYPE "public"."QuestionType_old";
COMMIT;

-- DropIndex
DROP INDEX "Answer_attemptId_idx";

-- DropIndex
DROP INDEX "Answer_questionId_idx";

-- DropIndex
DROP INDEX "Question_module_section_level_idx";

-- DropIndex
DROP INDEX "QuestionOption_questionId_idx";

-- DropIndex
DROP INDEX "TestAttempt_userId_module_idx";

-- AlterTable
ALTER TABLE "Answer" DROP COLUMN "createdAt",
DROP COLUMN "responseRaw",
DROP COLUMN "responseTimeMs",
ADD COLUMN     "answer" TEXT NOT NULL,
ADD COLUMN     "responseTime" INTEGER;

-- AlterTable
ALTER TABLE "Question" DROP COLUMN "prompt",
DROP COLUMN "updatedAt",
ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "correctAnswer" TEXT NOT NULL,
ALTER COLUMN "level" SET NOT NULL,
ALTER COLUMN "type" SET DEFAULT 'MCQ',
ALTER COLUMN "status" SET DEFAULT 'published';

-- AlterTable
ALTER TABLE "QuestionOption" DROP COLUMN "position";

-- AlterTable
ALTER TABLE "TestAttempt" DROP COLUMN "section",
DROP COLUMN "status",
ADD COLUMN     "duration" INTEGER;

-- DropEnum
DROP TYPE "AttemptStatus";
