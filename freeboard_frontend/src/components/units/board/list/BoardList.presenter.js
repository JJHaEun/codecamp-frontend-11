import { getDate } from "../../../../commons/date";
import * as S from "./BoardList.styles";

export default function BoardListUI(props) {
  return (
    <S.BoardListMain>
      <S.ButtonWrap>
        <S.Table>
          <thead>
            <tr>
              <td>B#N</td>
              <td>제목</td>
              <td>작성자</td>
              <td>날짜</td>
            </tr>
          </thead>
          <tbody>
            {props.data?.fetchBoards.map((el) => (
              <tr key={el._id} id={el._id} onClick={props.onClickDetailPage}>
                <td>{el._id.substring(el._id.length - 4, el._id.length)}</td>
                <td>{el.writer}</td>
                <td>{el.title}</td>
                <td>{getDate(el.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </S.Table>
        <button onClick={props.onClickCreateBoard}>글쓰기</button>
      </S.ButtonWrap>
    </S.BoardListMain>
  );
}
