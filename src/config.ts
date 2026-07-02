import dotenv from "dotenv";

dotenv.config();

export const config = {
  token: process.env.DISCORD_TOKEN!,
  clientId: process.env.CLIENT_ID!,
};

console.log(
  "ENV CHECK:",
  Object.keys(process.env).includes("DISCORD_TOKEN")
);
console.log(
  "CLIENT_ID CHECK:",
  Object.keys(process.env).includes("CLIENT_ID")
);
console.log("TOKEN LENGTH:", process.env.DISCORD_TOKEN?.length);
console.log("CLIENT_ID VALUE:", process.env.CLIENT_ID);

if (!config.token) {
  throw new Error("Missing DISCORD_TOKEN in .env");
}

if (!config.clientId) {
  throw new Error("Missing CLIENT_ID in .env");
}