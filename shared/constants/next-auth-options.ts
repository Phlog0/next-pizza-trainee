import { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/prisma/prisma";
import { compare, hashSync } from "bcrypt";
import { UserRole } from "@prisma/client";

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
      profile(profile) {
        return {
          id: profile.id,
          name: profile.name || profile.login,
          email: profile.email,
          img: profile.avatar_url,
          userRole: "USER" as UserRole,
        };
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }
        const values = {
          email: credentials.email,
        };

        const findUser = await prisma.user.findFirst({ where: values });
        if (!findUser) {
          return null;
        }
        const isPasswordValid = await compare(
          credentials.password,
          findUser.password
        );
        if (!isPasswordValid) {
          return null;
        }

        if (!findUser.verified) {
          return null;
        }
        return {
          id: findUser.id,
          email: findUser.email,
          name: findUser.fullName,
          userRole: findUser.userRole,
        };
      },
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_JWT_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account }) {
      try {
        if (account?.provider === "credentials") {
          return true;
        }
        if (!user.email) {
          return false;
        }

        const findUser = await prisma.user.findFirst({
          where: {
            OR: [
              {
                provider: account?.provider,
                providerId: account?.providerAccountId,
              },
              {
                email: user.email,
              },
            ],
          },
        });

        if (findUser) {
          // Вдруг юзер заходил через github, а потом обновил почту и тд.
          await prisma.user.update({
            where: {
              id: findUser.id,
            },
            data: {
              provider: account?.provider,
              providerId: account?.providerAccountId,
            },
          });
          return true;
        }
        await prisma.user.create({
          data: {
            email: user.email,
            fullName: user.name || "User #" + user.id,
            verified: new Date(),
            provider: account?.provider,
            providerId: account?.providerAccountId,
            //! небезопасно. Лучше id не передавать, а как-то по-другому
            password: hashSync(user.id.toString(), 10),
          },
        });
        return true;
      } catch (error) {
        console.error("Error [SIGN-IN]", error);
        return false;
      }
    },
    async jwt({ token }) {
      if (!token.email) {
        return token;
      }
      const findUser = await prisma.user.findFirst({
        where: { email: token.email },
      });
      if (findUser) {
        token.id = String(findUser.id);
        token.email = findUser.email;
        token.fullName = findUser.fullName;
        token.userRole = findUser.userRole;
      }
      return token;
    },
    session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id;
        session.user.userRole = token.userRole;
      }
      return session;
    },
  },
};
