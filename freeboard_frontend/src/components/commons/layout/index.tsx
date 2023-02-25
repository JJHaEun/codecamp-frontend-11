import LayoutBanner from "./banner/banner.container";
import LayoutNav from "./navigation";
// import LayoutSideBar from "./sidebar/sidebar.container";
import { MainWrap, PageWrap } from "./layout.styles";
import LayoutFooter from "./footer";
import { useRouter } from "next/router";
import LayoutHeaderWrap from "./header/header.container";
interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps): JSX.Element {
  const router = useRouter();
  const SHOW_SIDEBAR = [
    `/boards/new`,
    `/boards/${String(router.query.boardId)}/edit`,
  ];
  const HIDDEN_BANNER = [
    `/boards/new`,
    `/boards/${String(router.query.boardId)}/edit`,
    `/boards/${String(router.query.boardId)}`,
  ];
  // const isShowSidebar = SHOW_SIDEBAR.includes(router.asPath);
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);
  const isHiddenNav = SHOW_SIDEBAR.includes(router.asPath);

  return (
    <>
      <LayoutHeaderWrap />
      <MainWrap>
        {/* {isShowSidebar && <LayoutSideBar />} */}
        <PageWrap>{props.children}</PageWrap>
      </MainWrap>
      {!isHiddenNav && <LayoutNav />}
      {!isHiddenBanner && <LayoutBanner />}
      <LayoutFooter />
    </>
  );
}
