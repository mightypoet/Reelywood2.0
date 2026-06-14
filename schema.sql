-- Supabase SQL to create the agents table
-- You can run this in your Supabase SQL Editor

CREATE TABLE public.agents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  type TEXT,
  vani_agent_id TEXT NOT NULL,
  vani_workspace_id TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS (Row Level Security) if you want to secure it, but for our simple directory we will leave it fully readable
ALTER TABLE public.agents ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public reads
CREATE POLICY "Allow public read access"
ON public.agents
FOR SELECT
TO public
USING (true);

-- Create policy for authenticated/anonymous to insert/update/delete (FOR DEV PURPOSES ONLY)
-- Note: Replace anonymous/public access with proper auth for production
CREATE POLICY "Allow public all access"
ON public.agents
FOR ALL
TO public
USING (true)
WITH CHECK (true);
