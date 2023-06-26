import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: 'c180cab017a3163d8519',
      clientSecret:'da31d3968c999fe61217eddf8880e6d20add4308',
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)