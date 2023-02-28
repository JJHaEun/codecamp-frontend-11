import type { ApolloQueryResult } from "@apollo/client";
import type { ChangeEvent, RefObject } from "react";
import type {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";

export interface ISearchProductBoardProps {
  refetch: (
    variables?: Partial<IQueryFetchUseditemsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;
  onChangeKeyWord: (value: string) => void;
}
export interface ISearchProductBoardUIProps {
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  searchRef: RefObject<HTMLInputElement>;
}
