import { getDate } from "../../../../commons/libraries/date";
import * as S from "./BoardList.styles";

export default function BoardListUI(props) {
  return (
    <S.BoardListMain>
      <S.ButtonWrap>
        <S.Table>
          <S.TableTopLine>
            <S.BoardNumberTitle>B#N</S.BoardNumberTitle>
            <S.BoardMainTitle>제목</S.BoardMainTitle>
            <S.BoardWriterTitle>작성자</S.BoardWriterTitle>
            <S.BoardDateTitle>날짜</S.BoardDateTitle>
          </S.TableTopLine>

          {props.data?.fetchBoards.map((el) => (
            <S.TableBody
              key={el._id}
              id={el._id}
              onClick={props.onClickDetailPage}
            >
              <S.BoardNumber>
                {el._id.substring(el._id.length - 4, el._id.length)}
              </S.BoardNumber>
              <S.BoardTitle>{el.title}</S.BoardTitle>
              <S.BoardWriter>{el.writer}</S.BoardWriter>
              <S.TableDate>{getDate(el.createdAt)}</S.TableDate>
            </S.TableBody>
          ))}
        </S.Table>
        <button onClick={props.onClickCreateBoard}>글쓰기</button>
      </S.ButtonWrap>
    </S.BoardListMain>
  );
}
