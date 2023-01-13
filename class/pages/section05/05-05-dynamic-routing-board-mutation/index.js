import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";

const 나의그래프큐엘세팅 = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const router = useRouter();
  const [나의함수] = useMutation(나의그래프큐엘세팅);

  const onClickSubmit = async () => {
    // const result = 나의함수();
    try {
      const result = await 나의함수({
        variables: {
          writer: "훈이",
          title: "안녕하세요!!",
          contents: "반갑습니다",
        },
      });
      console.log(result);
      console.log(result.data.createBoard.number);
      router.push(
        `/section05/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}` // 주소를 입력해줌. 이 뒤의 변수가 router.push하는 해당폴더의 하위폴더 [number]에 들어옴
      );
    } catch (error) {
      alert(error.message);
    }
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>; // 한줄일때는 소괄호 필요없음
}
