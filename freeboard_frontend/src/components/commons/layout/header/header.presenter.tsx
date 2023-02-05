import { HeaderWrap } from "../layout.styles";
// 헤더 매뉴를 왼족 오른쪽 다르게 map으로뿌리고..
// 사이트 이름은 `느린하루`
// 느리지만 끝까지 가자는 의지와... 느긋하게 하루하루를 보냈으면 하는 바람을 담음
import * as S from "./header.styles";
import type { ILayoutHeaderProps } from "./header.types";
const HADDER_MENU_LEFT = [
  { name: "마켓", move: "/markets" },
  { name: "커뮤니티", move: "/boards" },
];
const HADDER_MENU_RIGHT = [
  // { name: "로그인", move: "/login" },
  { name: "회원가입", move: "/signUp" },
  // { name: "비회원 장바구니", move: "/cart" },
  { name: "장바구니", move: "/myCart" },
];
export default function LayoutHeader(props: ILayoutHeaderProps): JSX.Element {
  return (
    <>
      <HeaderWrap>
        <S.SiteTitle id="/boards" onClick={props.onClickMain}>
          느린하루
        </S.SiteTitle>
        <S.HeaderMenu>
          <S.LeftMenuWrap>
            {HADDER_MENU_LEFT.map((el) => (
              <span key={el.move}>
                <S.LeftMenu id={el.move} onClick={props.onClickMenu}>
                  {el.name}
                </S.LeftMenu>
              </span>
            ))}
          </S.LeftMenuWrap>
          <S.RightMeneWrap>
            <S.LoginDownWrap>
              <S.RightMenu id="/login" onClick={props.onClickMenu}>
                로그인
              </S.RightMenu>
              <span onClick={props.onClickOpenRightMenu}>
                {!props.isOpen ? <S.Down /> : <S.Up />}
              </span>
            </S.LoginDownWrap>
            {props.isOpen &&
              HADDER_MENU_RIGHT.map((el) => (
                <div key={el.move}>
                  <S.RightMenu>{el.name}</S.RightMenu>
                </div>
              ))}
          </S.RightMeneWrap>
        </S.HeaderMenu>
      </HeaderWrap>
    </>
  );
}
