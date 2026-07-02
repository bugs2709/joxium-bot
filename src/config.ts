import dotenv from "dotenv";

dotenv.config();

export const config = {
  token: process.env.DISCORD_TOKEN!,
  clientId: process.env.CLIENT_ID!,
};

if (!config.token) {
  throw new Error("Missing DISCORD_TOKEN in .env");
}

if (!config.clientId) {
  throw new Error("Missing CLIENT_ID in .env");
}