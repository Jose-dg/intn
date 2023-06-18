import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
// import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: 'Iv1.7616a73c72aea8cb',
      clientSecret: '8842709761ef98cce40b64d674a2c2f1ae1769b3'
    }),
    GoogleProvider({
      clientId: '580699459337-hq1lvuvku8hkh76b3jvqgvbk8drs2ara.apps.googleusercontent.com',
      clientSecret: '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'
    }),
    // CredentialsProvider({
    //   name: 'Credentials',
    //   credentials:{},
    //   async authorize(credentials, req) {
    //     try {
    //       const { email, password } = credentials;
    //       const user = await loginUser(email, password);
    //       return user;
    //     } catch (error) {
    //       throw new Error(error);
    //     }
    //   }
    // })
  ],
  pages: {
    signIn: '/signin',
  },
  debug: false, // <-- This will show the warnings
  
};


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

