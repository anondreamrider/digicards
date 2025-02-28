// import { PrismaAdapter } from "@auth/prisma-adapter"
// import { NextAuthOptions } from "next-auth"
// import GoogleProvider from "next-auth/providers/google"
// import CredentialsProvider from "next-auth/providers/credentials"
// import { prisma } from "@/lib/db/prisma"
// import { compare } from "bcrypt"

// export const authOptions: NextAuthOptions = {
//   adapter: PrismaAdapter(prisma),
//   session: {
//     strategy: "jwt"
//   },
//   pages: {
//     signIn: "/login",
//   },
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//     CredentialsProvider({
//       name: "credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" }
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) {
//           throw new Error("Invalid credentials")
//         }

//         const user = await prisma.user.findUnique({
//           where: { email: credentials.email }
//         })

//         if (!user || !user.password) {
//           throw new Error("User not found")
//         }

//         const isValid = await compare(credentials.password, user.password)

//         if (!isValid) {
//           throw new Error("Invalid password")
//         }

//         return {
//           id: user.id,
//           email: user.email,
//           name: user.name
//         }
//       }
//     })
//   ],
//   callbacks: {
//     session: ({ session, token }) => ({
//       ...session,
//       user: {
//         ...session.user,
//         id: token.sub,
//       },
//     }),
//     jwt: ({ token, user }) => {
//       if (user) {
//         return {
//           ...token,
//           id: user.id,
//         }
//       }
//       return token
//     },
//   },
// } 