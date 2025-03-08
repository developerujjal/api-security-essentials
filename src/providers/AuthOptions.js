import CredentialsProvider from "next-auth/providers/credentials"


const authOptions = {
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
    ],
    session: {
        strategy: "jwt", // Uses JWT by default
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            session.user.email = token.email;
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
}