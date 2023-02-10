import type { ApolloQueryResult } from "@apollo/client";
import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";

export interface ISearchBoardProps {
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  setKeyWord: Dispatch<SetStateAction<string>>;
  refetchCount: (
    variables?: Partial<IQueryFetchBoardsCountArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
}
export interface ISearchBoardUIProps {
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}
