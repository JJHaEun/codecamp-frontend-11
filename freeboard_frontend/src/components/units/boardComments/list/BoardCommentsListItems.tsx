import * as S from "./BoardCommentsList.styles";
import { getDate } from "../../../../commons/libraries/date";
import { useMutation } from "@apollo/client";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentsList.queries";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { IPropsBoardCommentsListItems } from "./BoardCommentsList.types";
import BoardComments from "../write/BoardCommentsWrite.container";

export default function BoardCommentsListItems(
  props: IPropsBoardCommentsListItems
) {
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const onClickCheckDelete = () => {
    setIsOpen(true);
  };
  const onChangeDeleteCommentsPassword = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };
  const onClickDeleteComment = () => {
    deleteBoardComment({
      variables: { boardCommentId: props.el._id, password },
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
    setIsOpen(false);
  };
  const onClickHideModal = () => {
    setIsOpen(false);
    return;
  };
  const onClickEdit = () => {
    setIsEdit(true);
  };
  return (
    <>
      {isOpen && (
        <S.DeleteCommentModal
          title="댓글 삭제"
          visible={true}
          onOk={onClickDeleteComment}
          onCancel={onClickHideModal}
          okText="삭제"
          cancelText="취소"
        >
          <p>비밀번호를 입력하세요</p>
          <input type="password" onChange={onChangeDeleteCommentsPassword} />
        </S.DeleteCommentModal>
      )}

      <div>
        <S.CommentsListWriter>{props.el.writer}</S.CommentsListWriter>
        <S.CommentsDateAndBt>
          <S.CreatedAt>{getDate(props.el.createdAt)}</S.CreatedAt>
          <S.DeletOrEditBt>
            <S.DeleteImg src="/delete_icon.png" onClick={onClickCheckDelete} />
            <S.EditImg onClick={onClickEdit} />
          </S.DeletOrEditBt>
        </S.CommentsDateAndBt>
      </div>
      <S.DefaultStar allowHalf disabled value={props.el.rating} />
      <S.CommentContens>{props.el.contents}</S.CommentContens>
      {isEdit && (
        <BoardComments el={props.el} isEdit={true} setIsEdit={setIsEdit} />
      )}
    </>
  );
}
