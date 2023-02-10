import type { ApolloQueryResult } from "@apollo/client";
import type { MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export interface IPagiNationPageProps {
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  countBoards?: Pick<IQuery, "fetchBoardsCount">;
}
export interface IPagiNationUIProps {
  onClickMovePrv: () => void;
  onClickMoveNext: () => void;
  startPage: number;
  nowPage: number;
  lastPage: number;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  disAbledBt: boolean;
}

export interface IPageStyleProps {
  isActive: boolean;
}
