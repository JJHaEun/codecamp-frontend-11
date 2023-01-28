import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  DELETE_BOARD,
  DISLIKE_BOARD,
  FETCH_BOARD,
  LIKE_BOARD,
} from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARDS } from "../list/BoardList.queries";
import type {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import type { MouseEvent } from "react";
import { Modal } from "antd";

export default function BoardDetail(): JSX.Element {
  const router = useRouter();
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardId) },
    }
  );
  const onClickLike = async (): Promise<void> => {
    await likeBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  };
  const onClickDisLike = async (): Promise<void> => {
    await dislikeBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  };
  const onClickMoveToList = (event: MouseEvent<HTMLButtonElement>): void => {
    void router.push(`/boards`);
  };
  const onClickDelete = async (
    event: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    await deleteBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
    Modal.success({
      content: "삭제 완료",
      afterClose() {
        void router.push(`/boards`);
      },
    });
  };
  const onClickMoveToEdit = (): void => {
    if (typeof router.query.boardId !== "string") {
      Modal.error({ content: "다시시도해주세요" });
      return;
    }
    void router.push(`/boards/${String(router.query.boardId)}/edit`);
  };
  return (
    <BoardDetailUI
      data={data}
      onClickLike={onClickLike}
      onClickDisLike={onClickDisLike}
      onClickMoveToList={onClickMoveToList}
      onClickDelete={onClickDelete}
      onClickMoveToEdit={onClickMoveToEdit}
    />
  );
}
