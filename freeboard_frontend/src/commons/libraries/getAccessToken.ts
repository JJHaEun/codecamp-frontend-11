import { gql } from "@apollo/client";
import { Modal } from "antd";
import { GraphQLClient } from "graphql-request";
import { useRouter } from "next/router";

const RESTORE_ACCESS_TOKEN = gql`
  mutation {
    restoreAccessToken {
      accessToken
    }
  }
`;

export const getAccessToken = async (): Promise<string | undefined> => {
  const router = useRouter();

  try {
    const graphQLClient = new GraphQLClient(
      "https://backend-practice.codebootcamp.co.kr/graphql",
      { credentials: "include" }
    );
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    return newAccessToken;
  } catch (error) {
    if (error instanceof Error)
      Modal.error({ content: "로그인이나 회원가입을 먼저 해주세요" });
    void router.push(`/signIn`);
  }
};
