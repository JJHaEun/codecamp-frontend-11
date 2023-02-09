import type { ApolloQueryResult } from "@apollo/client";
import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export interface ISearchBoardProps {
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  setKeyWord: Dispatch<SetStateAction<string>>;
}
export interface ISearchBoardUIProps {
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}
