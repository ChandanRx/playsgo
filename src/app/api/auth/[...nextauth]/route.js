
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
require('dotenv').config()

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      })
  ],
})

export {handler as GET , handler as POST  }