export const ENV = {
  DATABASE_URL: process.env.DATABASE_URL || "",
  REDIS_URL: process.env.REDIS_URL || "",

  API_VERSION: process.env.API_VERSION || "",
  API_PORT: process.env.API_PORT || "",

  LOG_DIR: "./logs",

  ENCRYPTION_KEY: process.env.ENCRYPTION_KEY || "",

  JWT_SECRET: process.env.JWT_SECRET || "",
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "",
};
