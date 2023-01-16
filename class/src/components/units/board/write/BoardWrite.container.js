import { useMutation } from "@apollo/client";
import { useState } from "react";
import { 나의그래프큐엘세팅 } from "./BoardWrite.queries"; //export는 골라서  가져오기 가능.
import BoardWriteUI from "./BoardWrite.presenter"; // export default 로 한개만 가져오기(이름바꿔 가져올 수 있음)
// import Askdjkjlpp from "./BoardWrite.presenter"; // export default 로 이름바꿔서 가져오기.

// import * as S from './BoardWrite.styles' //export 한방에 다 가져오기
// S.RedInput
// S.BlueButton

export default function BoardWrite() {
  const [나의함수] = useMutation(나의그래프큐엘세팅);
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
    setContents(event.target.value);
  };

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });

    console.log(result);
  };

  return (
    <div>
      <div>$$$$$$$$$$$$$$ 여기는 컨테이너 입니다. $$$$$$$$$$$$$$</div>
      <BoardWriteUI
        aaa={onClickSubmit}
        bbb={onChangeWriter}
        ccc={onChangeTitle}
        ddd={onChangeContents}
      />
      <div>$$$$$$$$$$$$$$ 여기는 컨테이너 입니다. $$$$$$$$$$$$$$</div>
    </div>
  );
}
