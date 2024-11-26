"use client"

import { Control, useFieldArray } from "react-hook-form"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ProfileData, SocialMediaPlatform } from "@/app/types/profile"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SocialLinksProps {
  control: Control<ProfileData>;
  name: "socialLinks";
}

const PLATFORMS: SocialMediaPlatform[] = ['github', 'twitter', 'linkedin', 'instagram', 'facebook', 'youtube', 'tiktok'];

export function SocialLinks({ control, name }: SocialLinksProps) {
  const { fields, append, remove } = useFieldArray({
    control,
    name
  })

  return (
    <div className="space-y-4">
      {fields.map((field, index) => (
        <div key={field.id} className="flex space-x-2">
          <FormField
            control={control}
            name={`${name}.${index}.platform`}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Platform</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select platform" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {PLATFORMS.map((platform) => (
                      <SelectItem key={platform} value={platform}>
                        {platform}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name={`${name}.${index}.url`}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>URL</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button 
            type="button" 
            variant="destructive"
            className="mt-8"
            onClick={() => remove(index)}
          >
            Remove
          </Button>
        </div>
      ))}
      <Button 
        type="button"
        variant="outline"
        onClick={() => append({ platform: 'github', url: '' })}
      >
        Add Social Link
      </Button>
    </div>
  )
}