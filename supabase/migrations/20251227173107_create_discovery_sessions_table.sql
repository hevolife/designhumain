/*
  # Create discovery_sessions table

  1. New Tables
    - `discovery_sessions`
      - `id` (uuid, primary key) - Unique identifier for each session request
      - `name` (text) - Full name of person requesting session
      - `email` (text) - Email address for scheduling
      - `phone` (text) - Phone number for contact
      - `preferred_date` (text, nullable) - Preferred date/time indication
      - `message` (text, nullable) - Optional message with specific needs
      - `created_at` (timestamptz) - Request timestamp

  2. Security
    - Enable RLS on `discovery_sessions` table
    - Add policy for public INSERT (anyone can request a discovery session)
    - No public SELECT (only admin can read)

  3. Notes
    - Discovery sessions are 15-30 minute free consultations
    - preferred_date is optional and flexible (text format)
    - Used for individual coaching discovery sessions
*/

CREATE TABLE IF NOT EXISTS discovery_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  preferred_date text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE discovery_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can request discovery sessions"
  ON discovery_sessions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);