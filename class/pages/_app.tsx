// import '../styles/globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const client = new ApolloClient({
    uri: "http://backend-example.codebootcamp.co.kr/graphql ",
    cache: new InMemoryCache(), // 컴퓨터의 메모리에  벡엔드에서 받아온 데이터 임시로 저장해놓기 => 니중에 더 자세히 알아보기
  });

  return (
    <>
      <div>
        ============== 여기는 _app.js 컴포넌트 시작부분 입니다.==============
      </div>
      <ApolloProvider client={client}>
        {/* 모든 Component 즉 모든 페이지에서 client라는 gql의 세팅을 적용할 수 있게 ApolloProvider라는것으로 감싸줌 */}
        <Component {...pageProps} />
      </ApolloProvider>
      <div>
        ============== 여기는 _app.js 컴포넌트 마지막부분 입니다. ==============
      </div>
    </>
  );
}
