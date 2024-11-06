import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import path from "path";

// for migrations
const migrationClient = postgres(process.env.DATABASE_URL as string, {
  max: 1,
});

const migrationsFolderPath = path.resolve(__dirname, "./migrations");


async function main() {
  try {
    await migrate(drizzle(migrationClient), {
      migrationsFolder: migrationsFolderPath,
    });
  } catch (error) {
    console.error("Migration error:", error);
  } finally {
    await migrationClient.end();
  }
}

main();
