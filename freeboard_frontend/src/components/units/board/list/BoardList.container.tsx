import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.queries";
import BoardListUI from "./BoardList.presenter";
import { useRouter } from "next/router";
import type { MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export default function BoardList(): JSX.Element {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );
  const onClickDetailPage = (event: MouseEvent<HTMLDivElement>): void => {
    void router.push(`/boards/${event.currentTarget.id}`);
  };

  const onClickCreateBoard = (): void => {
    void router.push(`/boards/new`);
  };
  return (
    <>
      <BoardListUI
        data={data}
        onClickDetailPage={onClickDetailPage}
        onClickCreateBoard={onClickCreateBoard}
      />
    </>
  );
}
