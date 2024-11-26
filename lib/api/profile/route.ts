import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
export async function GET(request: Request) {
 try {
   const { searchParams } = new URL(request.url)
   const userId = searchParams.get("userId")
    if (!userId) {
     return NextResponse.json(
       { error: "User ID is required" },
       { status: 400 }
     )
   }
    const profile = await prisma.profile.findUnique({
     where: { userId },
     include: { user: true }
   })
    return NextResponse.json(profile)
 } catch (error) {
   return NextResponse.json(
     { error: "Failed to fetch profile" },
     { status: 500 }
   )
 }
}

export async function POST(request: Request) {
 try {
   const data = await request.json()
   
   const profile = await prisma.profile.create({
     data: {
       userId: data.userId,
       name: data.name,
       title: data.title,
       bio: data.bio,
       avatar: data.avatar,
       email: data.email,
       phone: data.phone,
       company: data.company,
       location: data.location,
       socialLinks: data.socialLinks,
     }
   })
    return NextResponse.json(profile)
 } catch (error) {
   return NextResponse.json(
     { error: "Failed to create profile" },
     { status: 500 }
   )
 }      
}

export async function PUT(request: Request) {
 try {
   const data = await request.json()
   
   const profile = await prisma.profile.update({
     where: { userId: data.userId },
     data: {
       name: data.name,
       title: data.title,
       bio: data.bio,
       avatar: data.avatar,
       email: data.email,
       phone: data.phone,
       company: data.company,
       location: data.location,
       socialLinks: data.socialLinks,
     }
   })
    return NextResponse.json(profile)
 } catch (error) {
   return NextResponse.json(
     { error: "Failed to update profile" },
     { status: 500 }
    )
  }
} 