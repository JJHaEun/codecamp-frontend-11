import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const client = new ApolloClient({
    uri: "http://backend-example.codebootcamp.co.kr/graphql ",
    cache: new InMemoryCache(), // 컴퓨터의 메모리에  벡엔드에서 받아온 데이터 임시로 저장해놓기 => 니중에 더 자세히 알아보기
  });

  // prettier-ignore
  return (
    <>
      <ApolloProvider client={client}> 
        {props.children}
      </ApolloProvider>
    </>
  );
}
