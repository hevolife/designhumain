/*
  # Create contact_requests table

  1. New Tables
    - `contact_requests`
      - `id` (uuid, primary key) - Unique identifier for each contact request
      - `name` (text) - Full name of the person contacting
      - `email` (text) - Email address for reply
      - `phone` (text, nullable) - Optional phone number
      - `message` (text) - Message content
      - `coaching_type` (text) - Type of coaching interest: 'individual', 'business', 'workshop', or 'human-design'
      - `created_at` (timestamptz) - Timestamp of the request

  2. Security
    - Enable RLS on `contact_requests` table
    - Add policy for public INSERT (anyone can submit a contact form)
    - No public SELECT (only admin can read)

  3. Notes
    - All fields except phone are required
    - Timestamps default to current time
    - coaching_type helps categorize and route inquiries
*/

CREATE TABLE IF NOT EXISTS contact_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  coaching_type text NOT NULL CHECK (coaching_type IN ('individual', 'business', 'workshop', 'human-design')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact requests"
  ON contact_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);