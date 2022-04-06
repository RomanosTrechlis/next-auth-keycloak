import { AppProps } from "next/app";

const keycloakCfg  = {
    realm: "<REALM>",
    clientId: "<CLIENT_ID>",
    url: "http://localhost:8080/auth",
};

interface AppPropsWithCookies extends AppProps {
    cookies: any
}
