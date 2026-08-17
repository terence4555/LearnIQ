import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const EMAIL_TO_PROMOTE = "laskanrex@gmail.com"; // ← remplace par ton email si différent

async function main() {
  const user = await prisma.user.update({
    where: { email: EMAIL_TO_PROMOTE },
    data: { role: "admin" },
  });

  console.log(`${user.email} est maintenant admin.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });