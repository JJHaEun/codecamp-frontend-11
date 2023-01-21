import * as S from "./BoardCommentsList.styles";
import { IPropsBoardCommentsListUI } from "./BoardCommentsList.types";
import BoardCommentsListItems from "./BoardCommentsListItems";
export default function BoardCommentsListUI(props: IPropsBoardCommentsListUI) {
  return (
    <S.CommentsListMain>
      <S.CommentsList>
        {props.data?.fetchBoardComments.map((el) => (
          <div key={el._id}>
            <BoardCommentsListItems el={el} />
          </div>
        ))}
      </S.CommentsList>
    </S.CommentsListMain>
  );
}
