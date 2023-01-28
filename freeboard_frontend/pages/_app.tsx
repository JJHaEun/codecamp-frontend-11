import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import ApolloSettings from "../src/components/commons/apollo";
import Layout from "../src/components/commons/layout";
// import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloSettings>
      <>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </ApolloSettings>
  );
}
