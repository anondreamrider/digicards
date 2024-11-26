"use client"

import { useCallback, useState } from "react"
import { UploadCloud } from "lucide-react"
import Image from "next/image"
import { useDropzone } from "react-dropzone"
import { Button } from "@/components/ui/button"

interface ProfileUploaderProps {
  value?: string
  onChange: (url: string) => void
}

export function ProfileUploader({ value, onChange }: ProfileUploaderProps) {
  const [loading, setLoading] = useState(false)

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    try {
      setLoading(true)
      const file = acceptedFiles[0]
      
      // Create FormData
      const formData = new FormData()
      formData.append('file', file)

      // Upload to your API endpoint
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()
      onChange(data.url)
    } catch (error) {
      console.error('Error uploading file:', error)
    } finally {
      setLoading(false)
    }
  }, [onChange])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    },
    maxFiles: 1,
    multiple: false
  })

  return (
    <div>
      {value ? (
        <div className="relative w-40 h-40 mx-auto">
          <Image
            src={value}
            alt="Profile"
            fill
            className="rounded-full object-cover"
          />
          <Button
            variant="secondary"
            className="absolute bottom-0 right-0"
            onClick={() => onChange("")}
          >
            Remove
          </Button>
        </div>
      ) : (
        <div
          {...getRootProps()}
          className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:border-primary"
        >
          <input {...getInputProps()} />
          <UploadCloud className="w-10 h-10 mx-auto mb-4 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            Drag & drop an image here, or click to select
          </p>
        </div>
      )}
    </div>
  )
} 