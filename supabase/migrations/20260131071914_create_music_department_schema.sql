/*
  # Music Department Database Schema

  1. New Tables
    - `gallery_items`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text, nullable)
      - `media_url` (text) - URL to the image or video
      - `media_type` (text) - 'image' or 'video'
      - `category` (text) - 'performance', 'instrument', 'event', etc.
      - `created_at` (timestamptz)
      - `order_index` (integer) - for custom ordering
    
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `subject` (text, nullable)
      - `message` (text)
      - `created_at` (timestamptz)
  
  2. Security
    - Enable RLS on both tables
    - Gallery items: public read access, no write access (admin only via service role)
    - Contact submissions: public insert access, no read access (admin only via service role)
*/

-- Create gallery_items table
CREATE TABLE IF NOT EXISTS gallery_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  media_url text NOT NULL,
  media_type text NOT NULL CHECK (media_type IN ('image', 'video')),
  category text NOT NULL DEFAULT 'general',
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE gallery_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Gallery items policies - public read access
CREATE POLICY "Anyone can view gallery items"
  ON gallery_items
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Contact submissions policies - public insert only
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_gallery_items_category ON gallery_items(category);
CREATE INDEX IF NOT EXISTS idx_gallery_items_order ON gallery_items(order_index);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created ON contact_submissions(created_at DESC);