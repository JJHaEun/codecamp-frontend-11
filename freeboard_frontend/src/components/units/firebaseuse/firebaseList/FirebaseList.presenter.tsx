import type { IFirebaseListUIProps } from "./FirebaseList.types";
import * as S from "./FirebaseList.styles";
import * as St from "../../board/list/BoardList.styles";
import { v4 as uuidv4 } from "uuid";
export default function FirebaseListUI(
  props: IFirebaseListUIProps
): JSX.Element {
  return (
    <S.Wrap>
      <S.MainTable>
        <S.RowT>
          <S.WriterT>작성자</S.WriterT>
          <S.TitleT>제목</S.TitleT>
          <S.ContentT>내용</S.ContentT>
        </S.RowT>
        {props.boardList.map((el) => (
          <S.Row key={uuidv4()}>
            <S.Writer>{el.writer}</S.Writer>
            <S.Title id={uuidv4()} onClick={props.onClickDetail}>
              {el.title}
            </S.Title>
            <S.Content>{el.contents}</S.Content>
          </S.Row>
        ))}
        <S.ButtonWrap>
          <St.CreateBoardBt onClick={props.onClickMoveCreate}>
            글쓰기
          </St.CreateBoardBt>
        </S.ButtonWrap>
      </S.MainTable>
    </S.Wrap>
  );
}
