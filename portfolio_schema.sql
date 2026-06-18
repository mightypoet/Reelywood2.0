-- Create the portfolio_items table
CREATE TABLE public.portfolio_items (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    title TEXT NOT NULL,
    category TEXT CHECK (category IN ('creative', 'reel', 'stats')) NOT NULL,
    media_url TEXT NOT NULL,
    description TEXT,
    marketing_metrics JSONB DEFAULT '{}'::jsonb
);

-- Enable RLS for portfolio_items
ALTER TABLE public.portfolio_items ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (Read-only for public, all for authenticated/admin - simplified for dev)
CREATE POLICY "Allow public read access for portfolio_items"
ON public.portfolio_items
FOR SELECT
TO public
USING (true);

CREATE POLICY "Allow all access for portfolio_items"
ON public.portfolio_items
FOR ALL
TO public
USING (true)
WITH CHECK (true);


-- ==========================================
-- SUPABASE STORAGE BUCKET INSTRUCTIONS
-- ==========================================
-- To create the 'portfolio-media' bucket, you can run the following SQL snippet,
-- OR create it manually via the Supabase Dashboard:
-- 1. Go to your Supabase project dashboard.
-- 2. Click on "Storage" in the left sidebar.
-- 3. Click "New Bucket".
-- 4. Name it "portfolio-media" and toggle the "Public bucket" switch to ON.
-- 5. Click "Save".

-- Optional SQL approach to create the bucket and apply a public read policy:
/*
INSERT INTO storage.buckets (id, name, public)
VALUES ('portfolio-media', 'portfolio-media', true);

-- Allow public read access to the portfolio-media bucket
CREATE POLICY "Public Read Access"
ON storage.objects FOR SELECT
USING ( bucket_id = 'portfolio-media' );

-- Allow all uploads for dev purposes
CREATE POLICY "Public Upload Access"
ON storage.objects FOR INSERT
WITH CHECK ( bucket_id = 'portfolio-media' );
*/
