import type { ApolloQueryResult } from "@apollo/client";
import type { MouseEvent } from "react";
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
  onChangeKeyWord: (value: string) => void;
  countBoards?: number;
  refetchCount: (
    variables?: Partial<IQueryFetchBoardsCountArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
}
export interface IPropsSearchStyles {
  el: string;
  keyWord: string;
}
