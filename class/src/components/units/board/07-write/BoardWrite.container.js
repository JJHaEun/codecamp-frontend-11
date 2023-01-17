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
  const [isActive, setIsActive] = useState(false);

  const onChangeWriter = (event) => {
    setWriter(event.target.value); // 지금 입력한 값 => 임시저장공간에 저장되어있음.// 함수가 끝나야(현재 onChange함수) 반영됨.
    if (event.target.value && title && contents) {
      // 지금 입력한 writer && "" && "" 가 true가 될때
      // 검증
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (writer && event.target.value && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (writer && title && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        writer,
        title,
        contents,
      },
    });

    console.log(result);
  };

  return (
    <div>
      <div>$$$$$$$$$$$$$$ 여기는 컨테이너 입니다. $$$$$$$$$$$$$$</div>
      <BoardWriteUI
        //  자식 컴포넌트에 주고있는 이 부분이 props
        onClickSubmit={onClickSubmit}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents} // props라는 객체에 ddd라는 키 명으로 값은 뒤에 적은 함수가 들어감.자식 컴포넌트에서 사용시에는 객체이름(props).키명
        isActive={isActive}
      />
      <div>$$$$$$$$$$$$$$ 여기는 컨테이너 입니다. $$$$$$$$$$$$$$</div>
    </div>
  );
}
