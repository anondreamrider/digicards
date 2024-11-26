const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
async function main() {
 // Create a test user
 const user = await prisma.user.upsert({
   where: { id: '1' },
   update: {},
   create: {
     id: '1',
     email: 'test@example.com',
     name: 'Test User',
   },
 })
  // Create a test profile
 const profile = await prisma.profile.upsert({
   where: { userId: '1' },
   update: {},
   create: {
     userId: '1',
     username: 'testuser',
     bio: 'This is a test profile',
     theme: 'default',
     views: 0,
     links: {
       create: []
     }
   }
 })
  console.log({ user, profile })
}

main()
 .catch((e) => {
   console.error(e)
   process.exit(1)
 })
 .finally(async () => {
   await prisma.$disconnect()
 })