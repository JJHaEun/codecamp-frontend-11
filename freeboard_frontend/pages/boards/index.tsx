import { useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import BoardList from "../../src/components/units/board/list/BoardList.container";
import { FETCH_BOARDS } from "../../src/components/units/board/list/BoardList.queries";

export default function BoardListPage(): JSX.Element {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  return (
    <>
      <BoardList data={data} refetch={refetch} />
    </>
  );
}
