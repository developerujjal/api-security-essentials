import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";


export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                // Example: Check user credentials from DB
                const user = { id: "123", name: "Barry", email: credentials.email };

                if (user) {
                    return user;
                } else {
                    throw new Error("Invalid credentials");
                }
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    session: {
        strategy: "jwt", // Uses JWT by default
    },
    pages: {
        signIn: '/sign-in',
    },
    callbacks: {
        async jwt({ token, user }) {
            // if (user) {
            //     token.id = user.id;
            //     token.email = user.email;
            // }

            if (user) {
                token.role = 'user';
                token.id = user?.id

            }

            console.log("TOKEN: ", token)
            console.log("USER: ", user)
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            session.user.email = token.email;
            session.user.role = token?.role
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
}


