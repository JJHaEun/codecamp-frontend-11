import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import BoardCommentsListUI from "./BoardCommentsList.presenter";
import { FETCH_BOARD_COMMENTS } from "./BoardCommentsList.queries";

export default function BoardCommentsList() {
  const router = useRouter();
  console.log(router);
  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });

  return (
    <>
      <BoardCommentsListUI data={data} />
    </>
  );
}
