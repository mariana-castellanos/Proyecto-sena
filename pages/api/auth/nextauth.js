/// pages/api/auth/[...nextauth].js

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        // Simula la autenticación
        const user = { email: credentials.email, role: "user" }; // Ejemplo de rol predeterminado

        if (credentials.email === "admin@example.com" && credentials.password === "admin") {
          user.role = "admin";
        } else if (credentials.email === "domiciliary@example.com" && credentials.password === "domiciliary") {
          user.role = "domiciliary";
        }

        // En un caso real, autenticar contra una base de datos aquí
        if (user) {
          return user;
        } else {
          return null;
        }
      }
    })
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.role = token.role; // Agrega el rol al objeto de sesión
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role; // Almacena el rol en el JWT
      }
      return token;
    }
  }
});
