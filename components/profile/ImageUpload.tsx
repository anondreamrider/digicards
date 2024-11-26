"use client"
import { ChangeEvent } from "react"

interface ImageUploadProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export function ImageUpload({ label, value = "", onChange }: ImageUploadProps) {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        if (reader.result) {
          onChange(reader.result as string)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="image-upload">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mt-1 block w-full text-sm text-gray-500"
      />
      {value && <img src={value} alt="Uploaded" className="mt-2 w-32 h-32 object-cover" />}
    </div>
  )
}
