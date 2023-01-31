import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

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
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const onChangeInputs = (event) => {
    setInputs((prev) => ({
      //   writer: inputs.writer, // 앤 바뀐값
      // title: inputs.title, // 나머지는 그대로
      //   contents: inputs.contents,
      ...prev,
      // writer: event.target.value, // 앤 바뀐값
      // event.target.id: event.target.value,

      [event.target.id]: event.target.value,
    }));
  };
  // const onChangeTitle = (event) => {
  //   setInputs({
  //     // writer: inputs.writer, // 앤 바뀐값
  //     // title: inputs.title, // 나머지는 그대로
  //     // contents: inputs.contents,
  //     ...inputs,
  //     // title: event.target.value, // 나머지는 그대로
  //     // event.target.id: event.target.value,

  //     [event.target.id]: event.target.value, // event.target.id 를 키로 만들고 싶기때문에 즉  이 안에 든것깂을 키로 사용하기위해 대괄호로 감싸기
  //   });
  // };
  // const onChangeContents = (event) => {
  //   setInputs({
  //     // writer: inputs.writer, // 앤 바뀐값
  //     // title: inputs.title, // 나머지는 그대로
  //     // contents: inputs.contents,
  //     ...inputs,
  //     // 1. contents: event.target.value,
  //     // 2. event.target.id: event.target.value,
  //     3. [event.target.id]: event.target.value,
  //   });
  // };

  const onClickSubmit = async () => {
    // const result = 나의함수();
    const result = await 나의함수({
      // axios.get 부분과 나의함수() 둘다 같음. 둘다 실행하는것. axios의 경우 get부분이 실행.
      // 나의함수()가 실행되면  useMutation의 뒤에 들어있는 부분이 실행됨.
      variables: {
        // $ === variables `variables`애가 `$`역할을 함.
        // writer: inputs.writer,
        // title: inputs.title,
        // contents: inputs.contents,
        ...inputs,
      },
    });

    console.log(result);
  };

  return (
    <>
      작성자: <input type="text" id="writer" onChange={onChangeInputs} />
      제목: <input type="text" id="title" onChange={onChangeInputs} />
      내용: <input type="text" id="contents" onChange={onChangeInputs} />
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </>
  ); // 한줄일때는 소괄호 필요없음
}
