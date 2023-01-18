import { useMutation } from "@apollo/client";
import { useState } from "react";
import { UPDATE_BOARD, 나의그래프큐엘세팅 } from "./BoardWrite.queries"; //export는 골라서  가져오기 가능.
import BoardWriteUI from "./BoardWrite.presenter"; // export default 로 한개만 가져오기(이름바꿔 가져올 수 있음)
// import Askdjkjlpp from "./BoardWrite.presenter"; // export default 로 이름바꿔서 가져오기.
import { useRouter } from "next/router";
// import * as S from './BoardWrite.styles' //export 한방에 다 가져오기
// S.RedInput
// S.BlueButton

export default function BoardWrite(props) {
  const router = useRouter();
  const [나의함수] = useMutation(나의그래프큐엘세팅);
  const [updateBoard] = useMutation(UPDATE_BOARD);
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
    router.push(`/section09/09-03-boards/${result.data.createBoard.number}`); // 해당 게시물 번호를 가지고 올 수 있음. ==> 등록하면 상세페이지로 이동.
  };
  const onClickUpdate = async () => {
    // 수정이 끝날때까지 기다리기위해 async/await사용
    // 수정하기!!
    const result = await updateBoard({
      variables: {
        number: Number(router.query.number), /// 실제 주소를 보면 /section09/09-03-boards/[number]/edit 으로 여기서 import되어 실행되니 주소부분에 number존재.
        // 이 주소창의 것을 가져왔으니 숫자로 바꿔야함!(Int타입이기에)
        writer,
        title,
        contents,
      },
    });
    // 수정되었으면 다시 해당 상세페이지로 이동
    router.push(`/section09/09-03-boards/${result.data.updateBoard.number}`);
  };
  return (
    <div>
      <div>$$$$$$$$$$$$$$ 여기는 컨테이너 입니다. $$$$$$$$$$$$$$</div>
      <BoardWriteUI
        onClickSubmit={onClickSubmit}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        isEdit={props.isEdit}
        // props로 받은 isEdit를 isEdit라는 키명으로 다시 자식에게 넘겨줌
        onClickUpdate={onClickUpdate}
      />
      <div>$$$$$$$$$$$$$$ 여기는 컨테이너 입니다. $$$$$$$$$$$$$$</div>
    </div>
  );
}
