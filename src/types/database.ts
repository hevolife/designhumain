export type CoachingType = 'individual' | 'business' | 'workshop' | 'human-design';
export type PreferredFormat = 'presentiel' | 'visio';

export interface ContactRequest {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  preferred_date?: string;
  message: string;
  coaching_type: CoachingType;
  created_at?: string;
}

export interface WorkshopRegistration {
  id?: string;
  name: string;
  email: string;
  phone: string;
  workshop_type: string;
  preferred_format: PreferredFormat;
  message?: string;
  created_at?: string;
}

export interface DiscoverySession {
  id?: string;
  name: string;
  email: string;
  phone: string;
  preferred_date?: string;
  message?: string;
  created_at?: string;
}
