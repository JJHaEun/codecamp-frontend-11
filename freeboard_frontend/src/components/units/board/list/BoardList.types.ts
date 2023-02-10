import type { ApolloQueryResult } from "@apollo/client";
import type { Dispatch, MouseEvent, SetStateAction } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";

export interface IPropsBoardListUI {
  data?: Pick<IQuery, "fetchBoards">;
  onClickDetailPage: (event: MouseEvent<HTMLDivElement>) => void;
  onClickCreateBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  keyWord: string;
  setKeyWord: Dispatch<SetStateAction<string>>;
  countBoards?: Pick<IQuery, "fetchBoardsCount">;
  refetchCount: (
    variables?: Partial<IQueryFetchBoardsCountArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
}
export interface IPropsSearchStyles {
  el: string;
  keyWord: string;
}
