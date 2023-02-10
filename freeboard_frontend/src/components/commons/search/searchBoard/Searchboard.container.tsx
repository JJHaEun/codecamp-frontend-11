// import { useQuery } from "@apollo/client";
import _ from "lodash";
import type { ChangeEvent } from "react";
// import type {
//   IQuery,
//   IQueryFetchBoardsCountArgs,
// } from "../../../../commons/types/generated/types";
// import { FETCH_BOARDS_COUNT } from "../../../units/board/list/BoardList.queries";
import SearchBoardUI from "./Searchboard.presenter";
import type { ISearchBoardProps } from "./Searchboard.types";

export default function SearchBoard(props: ISearchBoardProps): JSX.Element {
  const getDebounce = _.debounce((value) => {
    void props.refetch({ search: value, page: 1 });
    void props.refetchCount({ search: value });
    props.setKeyWord(value);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.currentTarget.value);
  };
  return (
    <>
      <SearchBoardUI onChangeSearch={onChangeSearch} />
    </>
  );
}
