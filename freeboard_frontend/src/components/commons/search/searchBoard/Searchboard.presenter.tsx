import type { ISearchBoardUIProps } from "./Searchboard.types";
import * as S from "./Searchboard.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove } from "@fortawesome/free-solid-svg-icons";
export default function SearchBoardUI(props: ISearchBoardUIProps): JSX.Element {
  return (
    <S.SearchWrap>
      <FontAwesomeIcon icon={faDove} />
      <S.SearchBar
        type="text"
        onChange={props.onChangeSearch}
        ref={props.serchRef}
      />
    </S.SearchWrap>
  );
}
