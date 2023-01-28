import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

interface IPropsApolloSettings {
  children: JSX.Element;
}

export default function ApolloSettings(
  props: IPropsApolloSettings
): JSX.Element {
  const client = new ApolloClient({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
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
