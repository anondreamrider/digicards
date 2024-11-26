export type SocialMediaPlatform = 'github' | 'twitter' | 'linkedin' | 'instagram' | 'facebook' | 'youtube' | 'tiktok';

export interface SocialLink {
  platform: SocialMediaPlatform;
  url: string;
}

export interface ProfileData {
  id?: string;
  userId?: string;
  username: string;
  name: string;
  email: string;
  title?: string;
  bio?: string;
  avatar?: string;
  coverImage?: string;
  phone?: string;
  company?: string;
  location?: string;
  website?: string;
  socialLinks?: SocialLink[];
} 