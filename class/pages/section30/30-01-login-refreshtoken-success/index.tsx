import { gql, useApolloClient } from "@apollo/client";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginPage(): JSX.Element {
  /// useQuery세가지방법 -> 버튼클릭해 요청하기? -> 내가 원할때 요청하기..
  // 방법1. 페이지 접속하면 자동으로 data에 받아지고 리렌더링됨  -> 원래쓰던방법(data는 글로벌state에 저장되어-리렌더링됨)
  // const { data } =
  // useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  // 방법2. 버튼 클릭시 data에 받아지고 data는 글로벌 스테이트에 저장되고 리랜더링됨.
  // const [나의함수,{data}] = useLazyQuery(FETCH_USER_LOGGED_IN)

  // 방법3 . axios처럼 사용하는법
  // const client = useApolloClient() // 아ㅣ폴로세팅 된상태에서만 사용됨. - 대신 결과가 글로벌스테이트에 저장됨. fetchPolish..설정가능.
  // client.query() <= 얘가 axios.get()방식과 같다고 보면됨

  // 3번방식 사용

  const client = useApolloClient();
  const onClickButton = async (): Promise<void> => {
    const result = await client.query({
      query: FETCH_USER_LOGGED_IN, // 어떤쿼리를 요청할것인지
    });
    console.log(result);
  };
  return (
    <>
      <button onClick={wrapAsync(onClickButton)}>클릭하세요</button>
    </>
  );
}
