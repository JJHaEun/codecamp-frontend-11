import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

export default function GraphqlMutationPage() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value); // input에 입력한 값(발생한 이벤트를)을 state에 저장.
  };

  const onClickSubmit = async () => {};
  console.log("리랜더링 되나요?");

  return (
    <>
      작성자: <input type="text" onChange={onChangeWriter} />
      제목: <input type="text" onChange={onChangeTitle} />
      내용: <input type="text" onChange={onChangeContents} />
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </>
  ); // 한줄일때는 소괄호 필요없음
}
