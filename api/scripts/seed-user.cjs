// api/scripts/seed-user.cjs  (CommonJS)
const bcrypt = require("bcryptjs");

// Try to use your default-exported prisma from api/lib/prisma.js (ESM default)
let prisma = null;
try {
  prisma = require("../lib/prisma.js").default; // <-- your file exports default
} catch (e) {
  // Fallback: construct a client directly if import failed
  try {
    const { PrismaClient } = require("@prisma/client");
    prisma = new PrismaClient();
  } catch (e2) {
    console.error("❌ Could not load prisma client:", e2);
    process.exit(1);
  }
}

const email = "landlord@demo.app";
const name = "Demo Landlord";
const role = "landlord";
const plain = "password123";

async function seed() {
  // Find a model whose name contains "user" and supports upsert
  const modelKeys = Object.keys(prisma).filter(
    (k) => typeof prisma[k]?.upsert === "function"
  );
  const userModel =
    modelKeys.find((k) => /user/i.test(k)) ||
    modelKeys.find((k) => /account/i.test(k));

  if (!userModel) {
    console.error(
      "❌ No model with upsert found that looks like a user table.\nModels:",
      modelKeys
    );
    process.exit(1);
  }

  const hash = await bcrypt.hash(plain, 10);

  // Try common password field names
  const bases = { email, name, role };
  const attempts = [
    { ...bases, password: hash },
    { ...bases, passwordHash: hash },
    { ...bases, hashedPassword: hash },
  ];

  for (const data of attempts) {
    try {
      const user = await prisma[userModel].upsert({
        where: { email },
        update: data,
        create: data,
      });
      console.log(
        `✅ Seeded via prisma.${userModel} with password field "${Object.keys(
          data
        ).find((k) => /password/i.test(k))}":`,
        user.email,
        "role:",
        user.role
      );
      return;
    } catch (e) {
      // keep trying with next field
    }
  }

  console.error(
    "❌ Could not seed user. Likely the password field name is different or there is a unique constraint mismatch.\n" +
      "→ Open api/prisma/schema.prisma and check your user model name and password field name.\n" +
      "→ Then edit this script to use the correct field."
  );
  process.exit(1);
}

seed().catch((e) => {
  console.error("❌ Seed error:", e);
  process.exit(1);
});
