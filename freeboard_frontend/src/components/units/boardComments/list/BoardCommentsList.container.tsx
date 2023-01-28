import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import type { ChangeEvent, MouseEvent } from "react";
import { useState } from "react";
import type {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import BoardCommentsListUI from "./BoardCommentsList.presenter";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentsList.queries";

export default function BoardCommentsList(): JSX.Element {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [boardCommentId, setBoardCommentId] = useState("");
  const [boardCommentIdEdit, setBoardCommentIdEdit] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const onClickCheckDelete = (event: MouseEvent<HTMLImageElement>): void => {
    setIsOpen(true);
    setBoardCommentId(event?.currentTarget.id);
  };
  const onChangeDeleteCommentsPassword = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(event.target.value);
  };
  const onClickDeleteComment = async (): Promise<void> => {
    await deleteBoardComment({
      variables: { boardCommentId, password },
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
    setIsOpen(false);
  };
  const onClickHideModal = (): void => {
    setIsOpen(false);
  };
  const onClickEdit = (event: MouseEvent<HTMLSpanElement>): void => {
    setIsEdit(true);
    setBoardCommentIdEdit(event?.currentTarget.id);
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
        boardCommentIdEdit={boardCommentIdEdit}
      />
    </>
  );
}
