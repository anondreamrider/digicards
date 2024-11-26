"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ImageUpload } from "./ImageUpload"
import { SocialLinks } from "./SocialLinks"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProfileData } from "@/app/types/profile"

const profileSchema = z.object({
  username: z.string().min(3).max(50).nonempty("Username is required"),
  name: z.string().min(2).max(50).nonempty("Name is required"),
  email: z.string().email().nonempty("Email is required"),
  title: z.string().optional(),
  bio: z.string().max(500).optional(),
  avatar: z.string().optional(),
  coverImage: z.string().optional(),
  phone: z.string().optional(),
  company: z.string().optional(),
  location: z.string().optional(),
  website: z.string().url().optional(),
  socialLinks: z.array(
    z.object({
      platform: z.enum(['github', 'twitter', 'linkedin', 'instagram', 'facebook', 'youtube', 'tiktok']),
      url: z.string().url()
    })
  ).optional(),
})

const defaultValues: Partial<ProfileData> = {
  username: "",
  name: "",
  email: "",
  title: "",
  bio: "",
  avatar: "",
  coverImage: "",
  phone: "",
  company: "",
  location: "",
  website: "",
  socialLinks: []
}

export function ProfileForm({ 
  initialData, 
  onSubmit 
}: { 
  initialData?: Partial<ProfileData>, 
  onSubmit: (data: ProfileData) => void 
}) {
  const form = useForm<ProfileData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      ...defaultValues,
      ...initialData
    }
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
              <FormField
                control={form.control}
                name="avatar"
                render={({ field }) => (
                  <ImageUpload 
                    label="Profile Picture"
                    value={field.value || ""}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="johndoe" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="John Doe" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Professional Title</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Software Engineer" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea 
                      {...field} 
                      placeholder="Tell us about yourself..."
                      className="h-32"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" placeholder="john@example.com" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input {...field} type="tel" placeholder="+1 (555) 000-0000" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Company Name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="City, Country" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Social Links</CardTitle>
          </CardHeader>
          <CardContent>
            <SocialLinks 
              control={form.control} 
              name="socialLinks" 
            />
          </CardContent>
        </Card>

        <Button type="submit" className="w-full">Save Profile</Button>
      </form>
    </Form>
  )
} 

