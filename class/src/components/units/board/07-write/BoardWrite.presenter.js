import { RedInput, BlueButton } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  const qqq = 3;
  return (
    <>
      <div>@@@@@@ 여기는 프리젠터입니다.@@@@@@@@@</div>
      {/*  얘네도 부모와 자식관계. emotion으로 들어가는 props!! */}
      작성자: <RedInput type="text" onChange={props.onChangeWriter} />
      {/* 매개변수.키명 */}
      제목: <RedInput type="text" onChange={props.onChangeTitle} />
      내용: <RedInput type="text" onChange={props.onChangeContents} />
      <BlueButton onClick={props.onClickSubmit} isActive={props.isActive}>
        GRAPHQL-API 요청하기
      </BlueButton>
      <div>@@@@@@ 여기는 프리젠터입니다.@@@@@@@@@</div>
    </>
  );
}
