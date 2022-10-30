import { Client } from "@notionhq/client";

if (!process.env.NOTION_API_TOKEN) {
  throw new Error("NOTION_API_TOKEN is not defined");
}

export const notionClient = new Client({
  auth: process.env.NOTION_API_TOKEN,
});
