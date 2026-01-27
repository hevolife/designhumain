/*
  # Add preferred_date field to contact_requests table

  1. Changes
    - Add `preferred_date` column to `contact_requests` table
      - Type: text (optional field for flexible date/time input)
      - Allows users to specify their preferred appointment date and time
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_requests' AND column_name = 'preferred_date'
  ) THEN
    ALTER TABLE contact_requests ADD COLUMN preferred_date text;
  END IF;
END $$;
