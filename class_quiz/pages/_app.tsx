import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import ApolloSettings from "../src/components/commons/apollo";
import { globalStyles } from "../src/commons/styles/globalStyles";

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
