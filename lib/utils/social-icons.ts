import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  Globe,
  LucideIcon,
} from "lucide-react"
import { SocialMediaPlatform } from "@/app/types/profile"

export function getSocialIcon(platform: SocialMediaPlatform): LucideIcon {
  const icons: Record<SocialMediaPlatform, LucideIcon> = {
    github: Github,
    twitter: Twitter,
    linkedin: Linkedin,
    instagram: Instagram,
    facebook: Facebook,
    youtube: Youtube,
    website: Globe,
  }

  return icons[platform]
} 