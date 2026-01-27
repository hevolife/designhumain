/*
  # Create workshop_registrations table

  1. New Tables
    - `workshop_registrations`
      - `id` (uuid, primary key) - Unique identifier for each registration
      - `name` (text) - Full name of participant
      - `email` (text) - Email address for communication
      - `phone` (text) - Phone number for contact
      - `workshop_type` (text) - Specific workshop chosen
      - `preferred_format` (text) - 'presentiel' or 'visio'
      - `message` (text, nullable) - Optional additional message
      - `created_at` (timestamptz) - Registration timestamp

  2. Security
    - Enable RLS on `workshop_registrations` table
    - Add policy for public INSERT (anyone can register)
    - No public SELECT (only admin can read)

  3. Notes
    - Workshop types include: 'emotions', 'relations', 'valeurs', 'talents', 'equilibre', 'sens', 'blessures', 'conditionnements', 'croyances', 'design-humain-intro'
    - Message field is optional for additional questions
*/

CREATE TABLE IF NOT EXISTS workshop_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  workshop_type text NOT NULL,
  preferred_format text NOT NULL CHECK (preferred_format IN ('presentiel', 'visio')),
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE workshop_registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can register for workshops"
  ON workshop_registrations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);