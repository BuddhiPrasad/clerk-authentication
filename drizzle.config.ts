import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./configs/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:3hb6BLWRudag@ep-noisy-hill-a8vejten.eastus2.azure.neon.tech/neondb?sslmode=require",
  },
});
