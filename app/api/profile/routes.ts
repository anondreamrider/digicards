// import { NextResponse } from "next/server"
// import { prisma } from "@/lib/prisma"

// export async function GET(request: Request) {
//   try {
//     const profile = await prisma.profile.findFirst({
//       include: { user: true }
//     })
//     return NextResponse.json(profile)
//   } catch (error) {
//     return NextResponse.json({ error: "Failed to fetch profile" }, { status: 500 })
//   }
// }

// export async function POST(request: Request) {
//   try {
//     const data = await request.json()
//     const profile = await prisma.profile.upsert({
//       where: { userId: data.userId || '1' }, // Temporary default for testing
//       update: {
//         name: data.name,
//         title: data.title,
//         bio: data.bio,
//         email: data.email,
//         phone: data.phone,
//         company: data.company,
//         location: data.location,
//         avatar: data.avatar,
//         socialLinks: data.socialLinks
//       },
//       create: {
//         userId: data.userId || '1', // Temporary default for testing
//         name: data.name,
//         title: data.title,
//         bio: data.bio,
//         email: data.email,
//         phone: data.phone,
//         company: data.company,
//         location: data.location,
//         avatar: data.avatar,
//         socialLinks: data.socialLinks
//       }
//     })
//     return NextResponse.json(profile)
//   } catch (error) {
//     console.error('Profile save error:', error)
//     return NextResponse.json({ error: "Failed to save profile" }, { status: 500 })
//   }
// }
