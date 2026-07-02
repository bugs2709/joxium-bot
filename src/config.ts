import dotenv from "dotenv";
dotenv.config();

console.log("ENV CHECK:", Object.keys(process.env).includes("DISCORD_TOKEN"));
console.log("TOKEN LENGTH:", process.env.DISCORD_TOKEN?.length);