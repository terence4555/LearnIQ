-- CreateTable
CREATE TABLE "OpenPrompt" (
    "id" TEXT NOT NULL,
    "module" TEXT NOT NULL DEFAULT 'toefl',
    "mode" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OpenPrompt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OpenSubmission" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "promptId" TEXT NOT NULL,
    "mode" TEXT NOT NULL,
    "responseText" TEXT NOT NULL,
    "feedback" JSONB,
    "score" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OpenSubmission_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OpenSubmission" ADD CONSTRAINT "OpenSubmission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OpenSubmission" ADD CONSTRAINT "OpenSubmission_promptId_fkey" FOREIGN KEY ("promptId") REFERENCES "OpenPrompt"("id") ON DELETE CASCADE ON UPDATE CASCADE;
