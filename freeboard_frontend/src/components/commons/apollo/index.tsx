import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";

const GLOBAL_STATE = new InMemoryCache();

interface IPropsApolloSettings {
  children: JSX.Element;
}

export default function ApolloSettings(
  props: IPropsApolloSettings
): JSX.Element {
  const [accessToken] = useRecoilState(accessTokenState);
  // const [accessToken,setAccessToken] = useRecoilState(accessTokenState);

  const uploadLink = createUploadLink({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE,
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
