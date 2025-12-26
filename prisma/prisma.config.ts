import path from "node:path";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: path.join("prisma", "schema.prisma"),
  migrations: {
    path: path.join("prisma", "migrations"),
    seed: "npx tsx db/seed.ts",
  },
  views: {
    path: path.join("db", "views"),
  },
  typedSql: {
    path: path.join("db", "queries"),
  },
});
