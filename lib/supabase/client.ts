import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  process.env.SUPABASE_ENDPOINT as string,
  process.env.SUPABASE_ANON_KEY as string
);
