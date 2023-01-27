import { useRouter } from "next/router";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./headder";
import LayoutNavigation from "./navigation";

const HIDDEN_HEADERS = [
  "/section13/13-01-library-icon",
  "/section13/13-02-library-star",
  // ...
  // ...
  // ...
];

// router.asPath라는 속성에 내 현 접속한주소가 나옴.
// 이것과 위에 배열에 맞는 것을 조건부 랜더링..?. 저 배열안에 포함하는지
interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps): JSX.Element {
  const router = useRouter();
  console.log("===========");
  console.log(router.asPath);
  console.log("===========");
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath); // 포함되어있다면 true임. 그것을 변수에 담고...
  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      {/*  숨기는 것이 아닐때만 보여줘 */}
      <LayoutBanner />
      <LayoutNavigation />
      <div style={{ display: "flex" }}>
        <div
          style={{ height: "500px", width: "30%", backgroundColor: "orange" }}
        >
          사이드바
        </div>
        <div style={{ width: "70%" }}>{props.children}</div>
      </div>
      <LayoutFooter />
    </>
  );
}
