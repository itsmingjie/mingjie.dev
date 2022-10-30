import { NotionToMarkdown } from "notion-to-md";

import { notionClient } from "./client";

export const n2m = new NotionToMarkdown({ notionClient });
