import { HeaderWrap } from "../layout.styles";
// 헤더 매뉴를 왼족 오른쪽 다르게 map으로뿌리고..
// 사이트 이름은 `느린하루`
// 느리지만 끝까지 가자는 의지와... 느긋하게 하루하루를 보냈으면 하는 바람을 담음
const HADDER_MENU_LEFT = [
  { name: "마켓", move: "/markets" },
  { name: "커뮤니티", move: "/boards" },
];
const HADDER_MENU_RIGHT = [
  { name: "로그인", move: "/login" },
  { name: "회원가입", move: "/signUp" },
  { name: "비회원 장바구니", move: "/cart" },
  { name: "장바구니", move: "/myCart" },
];
export default function LayoutHeader(): JSX.Element {
  return (
    <>
      <HeaderWrap>
        <span>
          <h1>느린하루</h1>
          {HADDER_MENU_LEFT.map((el) => (
            <span key={el.move}>
              <span>{el.name}</span>
            </span>
          ))}
        </span>
        <span>
          {HADDER_MENU_RIGHT.map((el) => (
            <span key={el.move}>
              <span>{el.name}</span>
            </span>
          ))}
        </span>
      </HeaderWrap>
    </>
  );
}
