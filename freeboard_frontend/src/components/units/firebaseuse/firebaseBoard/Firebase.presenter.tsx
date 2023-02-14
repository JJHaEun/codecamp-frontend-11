import type { IFirebaseWriteUIProps } from "./Firebase.types";
import * as S from "./Firebase.styles";
export default function FirebaseWriteUI(
  props: IFirebaseWriteUIProps
): JSX.Element {
  return (
    <S.HowDoYouDoWrap>
      <S.HowDoYouDo>당신의 하루는 어떠셨나요?</S.HowDoYouDo>
      <S.MainNButton>
        <S.MainWrap>
          <S.WriterTitle>
            <S.BorderLine
              type="text"
              placeholder="작성자"
              onChange={props.onChangeContent("writer")}
            />

            <S.BorderLine
              type="text"
              placeholder="제목"
              onChange={props.onChangeContent("title")}
            />
          </S.WriterTitle>
          <S.ContentWrap>
            <S.Contents
              maxLength={100}
              placeholder="내용"
              onChange={props.onChangeContent("contents")}
            />
            <S.ContentsLength>
              {props.boardContent.contents.length}/100
            </S.ContentsLength>
          </S.ContentWrap>
        </S.MainWrap>
        <S.SubButton onClick={props.onClickSubmit}>등록</S.SubButton>
      </S.MainNButton>
    </S.HowDoYouDoWrap>
  );
}
