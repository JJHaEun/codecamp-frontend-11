import { useMutation } from "@apollo/client";
import { useState } from "react";
import { UPDATE_BOARD, 나의그래프큐엘세팅 } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";
import { useRouter } from "next/router";

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
    router.push(`/section09/09-04-boards/${result.data.createBoard.number}`); // 해당 게시물 번호를 가지고 올 수 있음. ==> 등록하면 상세페이지로 이동.
  };
  const onClickUpdate = async () => {
    const myvariables = {
      number: Number(router.query.number), /// 실제 주소를 보면 /section09/09-03-boards/[number]/edit 으로 여기서 import되어 실행되니 주소부분에 number존재.
    }; // 항상 들어있는 number라는 키가 있는 객체를 하나 만듬.
    // 객체 안에
    // if (writer) {
    //   myvariables.writer = writer;
    // }
    // if (title) {
    //   myvariables.title = title;
    // }
    // if (contents) {
    //   // 빈문자열이 아니라면 myvariables라는 객체에 키로 값을 넣어줌.
    //   myvariables.contents = contents;
    // }
    if (writer) myvariables.writer = writer;

    if (title) myvariables.title = title;

    if (contents) myvariables.contents = contents;
    // 빈문자열이 아니라면 myvariables라는 객체에 키로 값을 넣어줌.

    // 수정이 끝날때까지 기다리기위해 async/await사용
    // 수정하기!!
    const result = await updateBoard({
      variables: {
        ...myvariables,
      }, // 문자로 풀어서 넣어줌.또는 지금 myvariables도 객체이니
      // variables를 객체로 감싸지 않고 해당 객체명을 넣어주면됨. variables: myvariables 이렇게!!
    });
    // 수정되었으면 다시 해당 상세페이지로 이동
    router.push(`/section09/09-04-boards/${result.data.updateBoard.number}`);
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
        data={props.data} //undefined이거나, data이거나 둘중하나(등록하기시에는 undefined. fetch data는 수정하기에서만 넘겨주니까.. 수정하기부분에서는 data가나옴.)
      />
      <div>$$$$$$$$$$$$$$ 여기는 컨테이너 입니다. $$$$$$$$$$$$$$</div>
    </div>
  );
}
