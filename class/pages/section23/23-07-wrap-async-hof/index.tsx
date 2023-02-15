// hof를  활용해 비동기 함수를 감싸는 .. 것을 만들기

import { useMutation, gql } from "@apollo/client";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

const 나의그래프큐엘세팅 = gql`
  mutation {
    createBoard(writer: "철수", title: "안녕하세요", contents: "내용입니다") {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage(): JSX.Element {
  const [나의함수] = useMutation(나의그래프큐엘세팅);

  const onClickSubmit = async (): Promise<void> => {
    const result = await 나의함수();
    console.log(result);
  };

  // onClick에는 동기만 넣어줄수있음.. 따라서 비동기를 사용하려면동기함수안에서 실행시켜야함.
  // 물론 eslint오류이니 에러는 아니라 rule을 꺼도됨
  return (
    <button onClick={wrapAsync(onClickSubmit)}>GRAPHQL-API 요청하기</button>
  );
}
