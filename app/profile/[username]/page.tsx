"use client"

import { useEffect, useState } from "react"
import { ProfileDisplay } from "@/components/profile/ProfileDisplay"
import { ProfileData } from "@/app/types/profile"

export default function PublicProfilePage({ params }: { params: { username: string } }) {
  const [profile, setProfile] = useState<ProfileData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProfile() {
      if (!params?.username) {
        setLoading(false)
        return
      }

      try {
        const response = await fetch(`/api/profile?username=${params.username}`)
        if (response.ok) {
          const data = await response.json()
          setProfile(data)
        }
      } catch (error) {
        console.error('Failed to fetch profile:', error)
      }
      setLoading(false)
    }

    fetchProfile()
  }, [params?.username])

  if (loading) {
    return <div className="container mx-auto py-10">Loading...</div>
  }

  if (!profile) {
    return <div className="container mx-auto py-10">Profile not found</div>
  }

  return (
    <div className="container mx-auto py-10">
      <ProfileDisplay profile={profile} />
    </div>
  )
} 