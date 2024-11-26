// "use client"

// import { Control } from "react-hook-form"
// import { Button } from "@/components/ui/button"
// import {
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import { Plus, Trash2 } from "lucide-react"
// import { SocialMediaPlatform } from "@/app/types/profile"

// const SOCIAL_PLATFORMS: { value: SocialMediaPlatform; label: string }[] = [
//   { value: "github", label: "GitHub" },
//   { value: "twitter", label: "Twitter" },
//   { value: "linkedin", label: "LinkedIn" },
//   { value: "instagram", label: "Instagram" },
//   { value: "facebook", label: "Facebook" },
//   { value: "youtube", label: "YouTube" },
//   { value: "website", label: "Website" },
// ]

// export function SocialLinksField({ control }: { control: Control<any> }) {
//   return (
//     <FormField
//       control={control}
//       name="socialLinks"
//       render={({ field }) => (
//         <FormItem className="space-y-4">
//           <FormLabel>Social Media Links</FormLabel>
//           {field.value?.map((link: any, index: number) => (
//             <div key={index} className="flex gap-4">
//               <Select
//                 value={link.platform}
//                 onValueChange={(value) => {
//                   const newLinks = [...field.value]
//                   newLinks[index].platform = value
//                   field.onChange(newLinks)
//                 }}
//               >
//                 <SelectTrigger className="w-[200px]">
//                   <SelectValue placeholder="Select platform" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {SOCIAL_PLATFORMS.map((platform) => (
//                     <SelectItem key={platform.value} value={platform.value}>
//                       {platform.label}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//               <Input
//                 placeholder="URL"
//                 value={link.url}
//                 onChange={(e) => {
//                   const newLinks = [...field.value]
//                   newLinks[index].url = e.target.value
//                   field.onChange(newLinks)
//                 }}
//                 className="flex-1"
//               />
//               <Button
//                 variant="destructive"
//                 size="icon"
//                 onClick={() => {
//                   const newLinks = field.value.filter((_: any, i: number) => i !== index)
//                   field.onChange(newLinks)
//                 }}
//               >
//                 <Trash2 className="h-4 w-4" />
//               </Button>
//             </div>
//           ))}
//           <Button
//             type="button"
//             variant="outline"
//             onClick={() => {
//               field.onChange([
//                 ...(field.value || []),
//                 { platform: "", url: "" },
//               ])
//             }}
//           >
//             <Plus className="mr-2 h-4 w-4" />
//             Add Social Link
//           </Button>
//           <FormMessage />
//         </FormItem>
//       )}
//     />
//   )
// } 