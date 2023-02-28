// import { useQuery } from "@apollo/client";
import _ from "lodash";
import { useEffect, useRef } from "react";
import type { ChangeEvent } from "react";
// import type {
//   IQuery,
//   IQueryFetchBoardsCountArgs,
// } from "../../../../commons/types/generated/types";
// import { FETCH_BOARDS_COUNT } from "../../../units/board/list/BoardList.queries";
import SearchProductBoardUI from "./SearchProductboard.presenter";
import type { ISearchProductBoardProps } from "./SearchProductboard.types";

export default function SearchProductBoard(
  props: ISearchProductBoardProps
): JSX.Element {
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  const getDebounce = _.debounce((value) => {
    void props.refetch({ search: value, page: 1 });
    props.onChangeKeyWord(value);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.currentTarget.value);
  };

  return (
    <>
      <SearchProductBoardUI
        onChangeSearch={onChangeSearch}
        searchRef={searchRef}
      />
    </>
  );
}
