import { gql, GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation {
    restoreAccessToken {
      accessToken
    }
  }
`;
export const getAccessToken = async (): Promise<string | undefined> => {
  try {
    const graphQLClient = new GraphQLClient(
      "https://backend-practice.codebootcamp.co.kr/graphql",
      { credentials: "include" }
    );
    // 세팅과정중이기에 여기서는 뮤테이션, 쿼리 사용불가. axios로 post방식으로 요청하던, npm의 graphql request을 사용하기
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN); // 완전 그레프 ql용 axios(아폴로세팅없이 요청하는방식)
    const newAccessToken = result.restoreAccessToken.accessToken;
    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
};
