import type { ApolloQueryResult } from "@apollo/client";
import type { ChangeEvent, RefObject } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";

export interface ISearchBoardProps {
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  refetchCount: (
    variables?: Partial<IQueryFetchBoardsCountArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
  onChangeKeyWord: (value: string) => void;
}
export interface ISearchBoardUIProps {
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  serchRef: RefObject<HTMLInputElement>;
}
