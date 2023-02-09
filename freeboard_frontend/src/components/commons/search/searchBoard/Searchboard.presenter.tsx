import type { ISearchBoardUIProps } from "./Searchboard.types";

export default function SearchBoardUI(props: ISearchBoardUIProps): JSX.Element {
  return (
    <>
      <input type="text" onChange={props.onChangeSearch} />
    </>
  );
}
