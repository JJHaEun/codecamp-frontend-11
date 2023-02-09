import BoardListUI from "./BoardList.presenter";
import { useRouter } from "next/router";
import type { MouseEvent } from "react";
import { useState } from "react";

import { useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_BOARDS } from "./BoardList.queries";
// import PagiNationPage from "../../../commons/pagination/boardsPagination/pagination.container";
export default function BoardList(): JSX.Element {
  const [keyWord, setKeyWord] = useState("");

  const router = useRouter();
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
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
        refetch={refetch}
        keyWord={keyWord}
        setKeyWord={setKeyWord}
      />
    </>
  );
}
