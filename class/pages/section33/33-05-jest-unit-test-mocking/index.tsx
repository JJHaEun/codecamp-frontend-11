import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

const 나의그래프큐엘세팅 = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    # 변수들의 타입을 적어줌
    createBoard(createBoardInput: $createBoardInput) {
      # 변수를 $writer식으로 넣어주고
      _id
      writer
      title
      contents
    }
  }
`;
export default function MapBoardPage(): JSX.Element {
  const [나의함수] = useMutation(나의그래프큐엘세팅);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const router = useRouter();
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>): void => {
    setContents(event.target.value); // input에 입력한 값(발생한 이벤트를)을 state에 저장.
  };

  const onClickSubmit = async (): Promise<void> => {
    // const result = 나의함수();
    const result = await 나의함수({
      // axios.get 부분과 나의함수() 둘다 같음. 둘다 실행하는것. axios의 경우 get부분이 실행.
      // 나의함수()가 실행되면  useMutation의 뒤에 들어있는 부분이 실행됨.
      variables: {
        // $ === variables `variables`애가 `$`역할을 함.

        createBoardInput: {
          writer,
          title,
          contents,
          password: "1234",
        },
      },
      // $: {
      //   // $ === variables `variables`애가 `$`역할을 함.
      //   writer: writer,
      //   title: title,
      //   contents: contents,
      // },
    }); // 함수 실행시에 변수를 전달해줌

    console.log(result);
    const boardId = result.data.createBoard._id;
    void router.push(`/boards/${boardId}`);
  };

  return (
    <>
      작성자:{" "}
      <input role="input-writer" type="text" onChange={onChangeWriter} />
      제목: <input role="input-title" type="text" onChange={onChangeTitle} />
      내용:{" "}
      <input role="input-contents" type="text" onChange={onChangeContents} />
      <button onClick={wrapAsync(onClickSubmit)} role="submit-button"></button>
    </>
  );
}
