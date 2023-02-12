import BoardListUI from "./BoardList.presenter";
import { useRouter } from "next/router";
import type { MouseEvent } from "react";
import { useState } from "react";

import { useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
// import PagiNationPage from "../../../commons/pagination/boardsPagination/pagination.container";
export default function BoardList(): JSX.Element {
  const [keyWord, setKeyWord] = useState("");

  const router = useRouter();
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: countBoards, refetch: refetchCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const onClickDetailPage = (event: MouseEvent<HTMLDivElement>): void => {
    void router.push(`/boards/${event.currentTarget.id}`);
  };

  const onClickCreateBoard = (): void => {
    void router.push(`/boards/new`);
  };
  const onChangeKeyWord = (value: string): void => {
    setKeyWord(value);
  };
  return (
    <>
      <BoardListUI
        data={data}
        onClickDetailPage={onClickDetailPage}
        onClickCreateBoard={onClickCreateBoard}
        refetch={refetch}
        keyWord={keyWord}
        onChangeKeyWord={onChangeKeyWord}
        countBoards={countBoards?.fetchBoardsCount}
        refetchCount={refetchCount}
      />
    </>
  );
}
