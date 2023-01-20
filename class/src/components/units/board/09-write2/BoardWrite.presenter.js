import { RedInput, BlueButton } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <>
      <div>@@@@@@ 여기는 프리젠터입니다.@@@@@@@@@</div>
      작성자:
      <RedInput
        type="text"
        onChange={props.onChangeWriter}
        // defaultValue={props.data ? props.data.fetchBoard.writer : ""} // props.data가 있는 경우에는(수정하기시) 해당것 fetch해 보여주고, 없으면 보여주지마.
        defaultValue={props.data?.fetchBoard.writer} // props.data가 있는 경우에는(수정하기시) 해당것 fetch해 보여주고, 없으면 보여주지마.// 위와 동일
      />
      제목:
      <RedInput
        type="text"
        onChange={props.onChangeTitle}
        defaultValue={props.data?.fetchBoard.title} // props.data가 있는 경우에는(수정하기시) 해당것 fetch해 보여주고, 없으면 보여주지마.
      />
      내용:{" "}
      <RedInput
        type="text"
        onChange={props.onChangeContents}
        defaultValue={props.data?.fetchBoard.contents} // props.data가 있는 경우에는(수정하기시) 해당것 fetch해 보여주고, 없으면 보여주지마.
      />
      <BlueButton
        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
      >
        {props.isEdit ? "수정" : "등록"}하기
      </BlueButton>
      <div>@@@@@@ 여기는 프리젠터입니다.@@@@@@@@@</div>
    </>
  );
}
