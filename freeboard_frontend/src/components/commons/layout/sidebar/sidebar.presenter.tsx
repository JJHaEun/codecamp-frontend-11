import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SideBarWrap } from "../layout.styles";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import * as S from "./sidebar.styles";
import type { ILayoutSidebarUIProps } from "./sidebar.types";

const SIDE_BAR_MENU = [
  { name: "마켓", move: "/markets" },
  { name: "커뮤니티", move: "/boards" },
  { name: "로그인", move: "/login" },
  { name: "회원가입", move: "/signUp" },
  // { name: "홈", move: "/" },
];

export default function LayoutSideBarUI(
  props: ILayoutSidebarUIProps
): JSX.Element {
  return (
    <>
      <SideBarWrap>
        <S.SideMenuWrap>
          {SIDE_BAR_MENU.map((el) => (
            <span key={el.move}>
              <S.SideMenu id={el.move} onClick={props.onClickMove}>
                {el.name}
              </S.SideMenu>
            </span>
          ))}
          <S.SideMenu id="/" onClick={props.onClickMove}>
            <FontAwesomeIcon icon={faHouse} />
          </S.SideMenu>
        </S.SideMenuWrap>
      </SideBarWrap>
    </>
  );
}
