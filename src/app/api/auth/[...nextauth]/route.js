
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
require('dotenv').config()

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: "668773180006-5gitlncc37q2n4seilmfenplr17deip8.apps.googleusercontent.com",
        clientSecret: "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"
      })
  ],
})

export {handler as GET , handler as POST  }
