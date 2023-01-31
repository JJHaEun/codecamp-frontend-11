import * as S from "./BoardCommentsList.styles";
import { getDate } from "../../../../commons/libraries/date";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import type { IPropsBoardCommentsListItems } from "./BoardCommentsList.types";
import BoardComments from "../write/BoardCommentsWrite.container";
import { useState } from "react";

export default function BoardCommentsListItems(
  props: IPropsBoardCommentsListItems
): JSX.Element {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = (): void => {
    setIsEdit(true);
  };
  return (
    <>
      {!isEdit && (
        <>
          <div>
            <S.CommentsListWriter>{props.el.writer}</S.CommentsListWriter>
            <S.CommentsDateAndBt>
              <S.CreatedAt>{getDate(props.el.createdAt)}</S.CreatedAt>
              <S.DeletOrEditBt>
                <S.DeleteImg
                  src="/delete_icon.png"
                  alt="삭제아이콘"
                  onClick={props.onClickCheckDelete}
                  id={props.el._id}
                />
                <S.EditButton onClick={onClickEdit} id={props.el._id}>
                  <S.EditIcon icon={faPenToSquare} />
                </S.EditButton>
              </S.DeletOrEditBt>
            </S.CommentsDateAndBt>
          </div>
          <S.DefaultStar allowHalf disabled value={props.el.rating} />
          <S.CommentContens>{props.el.contents}</S.CommentContens>
        </>
      )}
      {isEdit && (
        <BoardComments
          el={props.el}
          isEdit={true}
          setIsEdit={setIsEdit}
          boardCommentId={props.boardCommentId}
          id={props.el._id}
        />
      )}
    </>
  );
}
