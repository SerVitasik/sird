import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongoDb from "@/database/database";
import User from "@/models/user";
import bcrypt from "bcryptjs";
const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials) {
                const {username, password} = credentials;
                try {
                    await connectMongoDb();
                    const user = await User.findOne({username});
                    if (!user) {
                        return null;
                    }

                    const passwordsMatch = await bcrypt.compare(password, user.password);
                    if (!passwordsMatch) {
                        return null;
                    }
                    return { id: user._id, name: user.username };
                } catch (error) {
                    console.log(error);
                    
                }
            },
        }),
    ],
    session: {
        jwt: true,
        strategy: "jwt"
    },
    // eslint-disable-next-line no-undef
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/signin"
    },
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}