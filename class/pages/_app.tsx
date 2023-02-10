// import '../styles/globals.css'
import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import ApolloSetting from "../src/components/commons/apollo";
import Layout from "../src/components/commons/layout";
import { RecoilRoot } from "recoil";
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <div>
        ============== 여기는 _app.js 컴포넌트 시작부분 입니다.==============
      </div>

      {/* 모든 Component 즉 모든 페이지에서 client라는 gql의 세팅을 적용할 수 있게 ApolloProvider라는것으로 감싸줌 */}
      <RecoilRoot>
        <ApolloSetting>
          <>
            <Global styles={globalStyles} />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </>
        </ApolloSetting>
      </RecoilRoot>
      <div>
        ============== 여기는 _app.js 컴포넌트 마지막부분 입니다. ==============
      </div>
    </>
  );
}
