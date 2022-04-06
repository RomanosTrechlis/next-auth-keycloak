import NextAuth from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak"

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        KeycloakProvider({
            clientId: "<CLIENT_ID>",
            clientSecret: "<CLIENT_SECRET>",
            issuer: "http://localhost:8080/auth/realms/<REALM>",
        }),
        // ...add more providers here
    ],
})