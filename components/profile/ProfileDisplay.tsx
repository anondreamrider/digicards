"use client"

import { ProfileData } from "@/app/types/profile"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, Phone, MapPin, Building, Globe, User } from "lucide-react"
import QRCode from "qrcode.react"

interface ProfileDisplayProps {
  profile: ProfileData
}

export function ProfileDisplay({ profile }: ProfileDisplayProps) {
  const profileUrl = `${window.location.origin}/profile/${profile.username}`

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="relative">
          {profile.coverImage && (
            <div className="absolute top-0 left-0 w-full h-32 bg-cover bg-center" 
                 style={{ backgroundImage: `url(${profile.coverImage})` }} 
            />
          )}
          <div className="relative z-10 flex items-center space-x-4 pt-8">
            <Avatar className="w-24 h-24">
              <AvatarImage src={profile.avatar} />
              <AvatarFallback>
                <User className="w-12 h-12" />
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-2xl">{profile.name}</CardTitle>
              {profile.title && <p className="text-muted-foreground">{profile.title}</p>}
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {profile.bio && (
            <p className="text-muted-foreground">{profile.bio}</p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profile.email && (
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{profile.email}</span>
              </div>
            )}
            {profile.phone && (
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{profile.phone}</span>
              </div>
            )}
            {profile.company && (
              <div className="flex items-center space-x-2">
                <Building className="w-4 h-4" />
                <span>{profile.company}</span>
              </div>
            )}
            {profile.location && (
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{profile.location}</span>
              </div>
            )}
            {profile.website && (
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <a href={profile.website} target="_blank" rel="noopener noreferrer" 
                   className="text-primary hover:underline">
                  {profile.website}
                </a>
              </div>
            )}
          </div>

          {profile.socialLinks && profile.socialLinks.length > 0 && (
            <div className="border-t pt-4">
              <h3 className="font-semibold mb-3">Social Links</h3>
              <div className="flex flex-wrap gap-3">
                {profile.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1 rounded-full bg-secondary hover:bg-secondary/80"
                  >
                    {link.platform}
                  </a>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Share Profile</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <QRCode 
            value={profileUrl}
            size={200}
            level="H"
            includeMargin
          />
          <p className="text-sm text-muted-foreground">
            Scan to view profile or visit:
            <a href={profileUrl} target="_blank" rel="noopener noreferrer" 
               className="ml-1 text-primary hover:underline">
              {profileUrl}
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  )
} 