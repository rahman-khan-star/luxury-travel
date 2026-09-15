-- =============================================
-- Wadi Al Dhaid Tours LLC — Database Schema
-- Supabase PostgreSQL
-- Generated: 2026-09-14
-- Updated: 2026-09-15 (FK constraints removed, nullable original_price, unique constraints for seed idempotency, added hotels, about_team, settings.whatsapp)
-- =============================================

-- -----------------------------------------------
-- Enums
-- -----------------------------------------------

CREATE TYPE pkg_category AS ENUM ('dubai', 'pakistan', 'umrah', 'visa');
CREATE TYPE booking_status AS ENUM ('Confirmed', 'Pending');
CREATE TYPE user_role AS ENUM ('admin');

-- -----------------------------------------------
-- Destinations
-- -----------------------------------------------

CREATE TABLE destinations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  country TEXT NOT NULL,
  description TEXT NOT NULL,
  image TEXT NOT NULL,
  rating NUMERIC(2,1) NOT NULL CHECK (rating >= 1 AND rating <= 5),
  price_from INTEGER NOT NULL CHECK (price_from >= 0),
  tags TEXT[] NOT NULL DEFAULT '{}',
  slug TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_destinations_name ON destinations (name);
CREATE INDEX idx_destinations_country ON destinations (country);
CREATE INDEX idx_destinations_slug ON destinations (slug);

-- -----------------------------------------------
-- Tour Packages
-- -----------------------------------------------

CREATE TABLE tour_packages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  destination TEXT NOT NULL,
  description TEXT NOT NULL,
  image TEXT NOT NULL,
  duration TEXT NOT NULL,
  price INTEGER NOT NULL CHECK (price >= 0),
  original_price INTEGER,
  rating NUMERIC(2,1) NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_count INTEGER NOT NULL DEFAULT 0 CHECK (review_count >= 0),
  highlights TEXT[] NOT NULL DEFAULT '{}',
  included TEXT[] NOT NULL DEFAULT '{}',
  category pkg_category NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE UNIQUE INDEX idx_tour_packages_unique ON tour_packages (title);
CREATE INDEX idx_tour_packages_title ON tour_packages (title);
CREATE INDEX idx_tour_packages_category ON tour_packages (category);
CREATE INDEX idx_tour_packages_destination ON tour_packages (destination);

-- -----------------------------------------------
-- Testimonials
-- -----------------------------------------------

CREATE TABLE testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  avatar TEXT NOT NULL,
  location TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  text TEXT NOT NULL,
  package TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE UNIQUE INDEX idx_testimonials_unique ON testimonials (name, text);
CREATE INDEX idx_testimonials_name ON testimonials (name);
CREATE INDEX idx_testimonials_rating ON testimonials (rating);

-- -----------------------------------------------
-- Blog Posts
-- -----------------------------------------------

CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  image TEXT NOT NULL,
  author TEXT NOT NULL,
  date DATE NOT NULL,
  category TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_blog_posts_slug ON blog_posts (slug);
CREATE INDEX idx_blog_posts_category ON blog_posts (category);
CREATE INDEX idx_blog_posts_date ON blog_posts (date DESC);

-- -----------------------------------------------
-- Visa Services
-- -----------------------------------------------

CREATE TABLE visa_services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  country TEXT NOT NULL,
  flag TEXT NOT NULL,
  type TEXT NOT NULL,
  duration TEXT NOT NULL,
  price INTEGER NOT NULL CHECK (price >= 0),
  processing_time TEXT NOT NULL,
  requirements TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE UNIQUE INDEX idx_visa_services_unique ON visa_services (country, type);
CREATE INDEX idx_visa_services_country ON visa_services (country);
CREATE INDEX idx_visa_services_type ON visa_services (type);

-- -----------------------------------------------
-- FAQs
-- -----------------------------------------------

CREATE TABLE faqs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE UNIQUE INDEX idx_faqs_unique ON faqs (question);

-- -----------------------------------------------
-- Gallery Items
-- -----------------------------------------------

CREATE TABLE gallery_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  image TEXT NOT NULL,
  title TEXT NOT NULL,
  destination TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE UNIQUE INDEX idx_gallery_items_unique ON gallery_items (image, title);
CREATE INDEX idx_gallery_items_destination ON gallery_items (destination);

-- -----------------------------------------------
-- Statistics
-- -----------------------------------------------

CREATE TABLE statistics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  label TEXT NOT NULL UNIQUE,
  value TEXT NOT NULL,
  suffix TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- -----------------------------------------------
-- Team Members
-- -----------------------------------------------

CREATE TABLE team_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  designation TEXT NOT NULL,
  photo TEXT NOT NULL,
  phone TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  description TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_team_members_is_active ON team_members (is_active);
CREATE INDEX idx_team_members_display_order ON team_members (display_order);

-- -----------------------------------------------
-- Messages
-- -----------------------------------------------

CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  date DATE NOT NULL,
  read BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE UNIQUE INDEX idx_messages_unique ON messages (name, subject, date);
CREATE INDEX idx_messages_read ON messages (read);
CREATE INDEX idx_messages_date ON messages (date DESC);

-- -----------------------------------------------
-- Users
-- -----------------------------------------------

CREATE TABLE users (
  username TEXT PRIMARY KEY,
  password_hash TEXT NOT NULL,
  name TEXT NOT NULL,
  role user_role NOT NULL DEFAULT 'admin',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_users_role ON users (role);

-- -----------------------------------------------
-- Settings
-- -----------------------------------------------

CREATE TABLE settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  whatsapp TEXT NOT NULL DEFAULT '',
  website TEXT NOT NULL,
  address TEXT NOT NULL,
  currency TEXT NOT NULL DEFAULT 'USD',
  timezone TEXT NOT NULL DEFAULT 'Asia/Dubai',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE UNIQUE INDEX idx_settings_unique ON settings (company_name);

-- -----------------------------------------------
-- Bookings
-- -----------------------------------------------

CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  package_name TEXT NOT NULL,
  date DATE NOT NULL,
  amount INTEGER NOT NULL CHECK (amount >= 0),
  status booking_status NOT NULL DEFAULT 'Pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE UNIQUE INDEX idx_bookings_unique ON bookings (name, package_name, date);
CREATE INDEX idx_bookings_status ON bookings (status);
CREATE INDEX idx_bookings_date ON bookings (date DESC);
CREATE INDEX idx_bookings_package ON bookings (package_name);

-- -----------------------------------------------
-- Hotels
-- -----------------------------------------------

CREATE TABLE hotels (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  location TEXT NOT NULL,
  image TEXT NOT NULL,
  rating NUMERIC(2,1) NOT NULL CHECK (rating >= 1 AND rating <= 5),
  price INTEGER NOT NULL CHECK (price >= 0),
  amenities TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_hotels_name ON hotels (name);
CREATE INDEX idx_hotels_location ON hotels (location);

-- -----------------------------------------------
-- About Team
-- -----------------------------------------------

CREATE TABLE about_team (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  image TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_about_team_name ON about_team (name);

-- -----------------------------------------------
-- Updated At Trigger
-- -----------------------------------------------

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_destinations_updated
  BEFORE UPDATE ON destinations
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER trigger_tour_packages_updated
  BEFORE UPDATE ON tour_packages
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER trigger_blog_posts_updated
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER trigger_team_members_updated
  BEFORE UPDATE ON team_members
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER trigger_settings_updated
  BEFORE UPDATE ON settings
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER trigger_users_updated
  BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- For existing deployments: add whatsapp column to settings
ALTER TABLE settings ADD COLUMN IF NOT EXISTS whatsapp TEXT NOT NULL DEFAULT '';

-- -----------------------------------------------
-- Default Admin User
-- Password will be hashed via bcrypt in the auth migration step.
-- No seed data inserted here for security.
-- -----------------------------------------------

-- No seed data inserted. Auth migration handles this separately.
