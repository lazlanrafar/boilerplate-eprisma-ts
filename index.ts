import App from "@/lib/server";
import { config as configDotenv } from "dotenv";

configDotenv();

const app = new App();
const express = app.express;

const port = process.env.API_PORT || 3000;
express.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

process.on("SIGINT", async () => {
  await app.disconnectPrisma();
  await app.disconnectRedis();
  console.log("\n⚡️[server]: Server is stopped");
  process.exit();
});
