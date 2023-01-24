import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import BoardCommentsListUI from "./BoardCommentsList.presenter";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentsList.queries";

export default function BoardCommentsList() {
  const router = useRouter();
  const [password, setPassword] = useState("");

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
  const onClickDeleteComment = (event: any) => {
    deleteBoardComment({
      variables: { boardCommentId: event.currentTarget.id, password },
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
  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });

  return (
    <>
      <BoardCommentsListUI
        data={data}
        isEdit={isEdit}
        isOpen={isOpen}
        onClickCheckDelete={onClickCheckDelete}
        onChangeDeleteCommentsPassword={onChangeDeleteCommentsPassword}
        onClickDeleteComment={onClickDeleteComment}
        onClickHideModal={onClickHideModal}
        onClickEdit={onClickEdit}
        setIsEdit={setIsEdit}
      />
    </>
  );
}
