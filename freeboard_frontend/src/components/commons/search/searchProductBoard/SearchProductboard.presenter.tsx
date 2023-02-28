import type { ISearchProductBoardUIProps } from "./SearchProductboard.types";
import * as S from "./SearchProductboard.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove } from "@fortawesome/free-solid-svg-icons";
export default function SearchProductBoardUI(
  props: ISearchProductBoardUIProps
): JSX.Element {
  return (
    <S.SearchWrap>
      <FontAwesomeIcon icon={faDove} />
      <S.SearchBar
        type="text"
        onChange={props.onChangeSearch}
        ref={props.searchRef}
      />
    </S.SearchWrap>
  );
}
