// api/scripts/seed-all.cjs
/* Seed one demo user for each role in schema.prisma: ADMIN | MANAGER | LANDLORD | TENANT
   Usage (from project root):  node api/scripts/seed-all.cjs
   Optional: SEED_PWD=yourpass node api/scripts/seed-all.cjs
*/

const bcrypt = require("bcryptjs");
// Your prisma is a default export (ESM). In CJS we access `.default`.
const prisma = require("../lib/prisma.js").default;

const ROLES = ["ADMIN", "MANAGER", "LANDLORD", "TENANT"];
const DEFAULT_PWD = process.env.SEED_PWD || "password123";

// Keep phoneNos unique to avoid collisions if you re-run in a fresh DB
const seedUsers = [
  {
    firstName: "Alice",
    lastName: "Admin",
    email: "admin@demo.app",
    phoneNo: "9990000001",
    role: "ADMIN",
  },
  {
    firstName: "Maya",
    lastName: "Manager",
    email: "manager@demo.app",
    phoneNo: "9990000002",
    role: "MANAGER",
  },
  {
    firstName: "Liam",
    lastName: "Landlord",
    email: "landlord@demo.app",
    phoneNo: "9990000003",
    role: "LANDLORD",
  },
  {
    firstName: "Tara",
    lastName: "Tenant",
    email: "tenant@demo.app",
    phoneNo: "9990000004",
    role: "TENANT",
  },
];

(async function run() {
  try {
    for (const u of seedUsers) {
      const email = String(u.email).trim().toLowerCase();
      const role = String(u.role).trim().toUpperCase();

      if (!ROLES.includes(role)) {
        console.log(`⚠️  Skipping ${email}: invalid role "${role}"`);
        continue;
      }

      const password = await bcrypt.hash(DEFAULT_PWD, 10);

      const data = {
        firstName: String(u.firstName).trim(),
        lastName: String(u.lastName).trim(),
        email,
        phoneNo: String(u.phoneNo).trim(),
        role,
        password, // bcrypt hash matches your schema field
      };

      const out = await prisma.users.upsert({
        where: { email },
        update: data, // re-running the script will keep these in sync
        create: data,
      });

      console.log(`✅ ${out.email} (${out.role})`);
    }

    console.log("\nDone. Default password:", DEFAULT_PWD);
  } catch (e) {
    console.error("❌ Seed error:", e.message || e);
    process.exitCode = 1;
  } finally {
    // Always disconnect Prisma
    if (prisma?.$disconnect) await prisma.$disconnect();
  }
})();
