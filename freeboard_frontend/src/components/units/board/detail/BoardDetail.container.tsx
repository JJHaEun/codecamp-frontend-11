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
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";

export default function BoardDetail() {
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
  const onClickLike = () => {
    likeBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  };
  const onClickDisLike = () => {
    dislikeBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  };
  const onClickMoveToList = (event: MouseEvent<HTMLButtonElement>) => {
    router.push(`/boards`);
  };
  const onClickDelete = (event: MouseEvent<HTMLButtonElement>) => {
    deleteBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
    router.push(`/boards`);
    alert("삭제 완료");
  };
  const onClickMoveToEdit = (event: MouseEvent<HTMLButtonElement>) => {
    router.push(`/boards/${router.query.boardId}/edit`);
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
