import { HeaderWrap } from "../layout.styles";
// 헤더 매뉴를 왼족 오른쪽 다르게 map으로뿌리고..
// 사이트 이름은 `느린하루`
// 느리지만 끝까지 가자는 의지와... 느긋하게 하루하루를 보냈으면 하는 바람을 담음
import * as S from "./header.styles";
import type { ILayoutHeaderProps } from "./header.types";
// const HADDER_MENU_LEFT = [
//   { name: "마켓", move: "/markets" },
//   { name: "커뮤니티", move: "/boards" },
// ];
// const HADDER_MENU_RIGHT = [
//   // { name: "로그인", move: "/login" },
//   { name: "회원가입", move: "/signUp" },
//   // { name: "비회원 장바구니", move: "/cart" },
//   { name: "장바구니", move: "/myCart" },
// ];
export default function LayoutHeader(props: ILayoutHeaderProps): JSX.Element {
  return (
    <>
      <HeaderWrap>
        <S.SiteTitle id="/" onClick={props.onClickMain}>
          느린하루
        </S.SiteTitle>

        <S.TitleAndMenu>
          <S.SiteNameWrap>
            <header>
              <h2>좋아하는 일,</h2>
              <h2>그리고 , 여유 ..</h2>
              <h3>{props.data?.fetchUserLoggedIn.name} 환영합니다</h3>
            </header>
          </S.SiteNameWrap>
          <S.MeNuImg>
            <S.RightMeNu
              onClick={props.onClick}
              defaultSelectedKeys={["/boards"]}
              mode="horizontal"
              items={props.items2}
            />
            <S.Img src={`/sunset.jpg`} alt="" />
          </S.MeNuImg>
        </S.TitleAndMenu>
      </HeaderWrap>
    </>
  );
}
