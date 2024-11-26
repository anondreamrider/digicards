"use client"

import { ProfileForm } from "@/components/profile/ProfileForm"
import { ProfileDisplay } from "@/components/profile/ProfileDisplay"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState, useEffect } from "react"
import { useToast } from "@/hooks/use-toast"
import { ProfileData } from "@/app/types/profile"

export default function ProfilePage() {
  const [profile, setProfile] = useState<ProfileData | null>(null)
  const [formData, setFormData] = useState<Partial<ProfileData>>({})
  const { toast } = useToast()

  useEffect(() => {
    const savedProfile = localStorage.getItem('profile')
    if (savedProfile) {
      const parsed = JSON.parse(savedProfile)
      setProfile(parsed)
      setFormData(parsed)
    }
  }, [])

  const handleFormChange = (data: Partial<ProfileData>) => {
    setFormData(data)
  }

  const handleSubmit = async (data: ProfileData) => {
    try {
      const response = await fetch('/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Failed to save profile')

      const savedProfile = await response.json()
      localStorage.setItem('profile', JSON.stringify(savedProfile))
      setProfile(savedProfile)
      
      toast({
        title: "Profile updated",
        description: "Your profile has been successfully saved.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save profile. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container mx-auto py-10">
      <Tabs defaultValue="edit" className="space-y-4">
        <TabsList>
          <TabsTrigger value="edit">Edit Profile</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>
        
        <TabsContent value="edit">
          <ProfileForm 
            initialData={profile || {}} 
            onSubmit={handleSubmit}
            onChange={handleFormChange}
          />
        </TabsContent>
        
        <TabsContent value="preview">
          {formData && Object.keys(formData).length > 0 ? (
            <ProfileDisplay profile={formData as ProfileData} />
          ) : (
            <div className="text-center py-10">
              No profile data available. Please create your profile first.
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
