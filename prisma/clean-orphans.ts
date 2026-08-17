import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const orphans = await prisma.question.findMany({
    where: {
      module: "english",
      section: { in: ["grammar", "vocabulary"] },
      stage: null,
    },
    select: { id: true, section: true, topic: true, content: true },
  });

  console.log(`${orphans.length} question(s) orpheline(s) trouvée(s) :`);
  for (const q of orphans) {
    console.log(`  [${q.section}] topic="${q.topic}" — "${q.content.slice(0, 60)}..."`);
  }

  const result = await prisma.question.deleteMany({
    where: {
      module: "english",
      section: { in: ["grammar", "vocabulary"] },
      stage: null,
    },
  });

  console.log(`\n✓ ${result.count} question(s) supprimée(s).`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });