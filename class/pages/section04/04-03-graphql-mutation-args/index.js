import { useMutation, gql } from "@apollo/client";

const 나의그래프큐엘세팅 = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    # 변수들의 타입을 적어줌
    createBoard(writer: $writer, title: $title, contents: $contents) {
      # 변수를 $writer식으로 넣어주고
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [나의함수] = useMutation(나의그래프큐엘세팅);

  const onClickSubmit = async () => {
    // const result = 나의함수();
    const result = await 나의함수({
      // axios.get 부분과 나의함수() 둘다 같음. 둘다 실행하는것. axios의 경우 get부분이 실행.
      // 나의함수()가 실행되면  useMutation의 뒤에 들어있는 부분이 실행됨.
      variables: {
        // $ === variables `variables`애가 `$`역할을 함.
        writer: "훈이",
        title: "안녕하세요!!",
        contents: "반갑습니다",
      },
    }); // 함수 실행시에 변수를 전달해줌

    console.log(result);
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>; // 한줄일때는 소괄호 필요없음
}
