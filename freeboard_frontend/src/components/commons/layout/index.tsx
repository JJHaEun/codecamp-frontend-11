import LayoutBanner from "./banner";
import LayoutHeader from "./header";
import LayoutNav from "./navigation";
import LayoutSideBar from "./sidebar";
import { MainWrap, PageWrap } from "./layout.styles";
import LayoutFooter from "./footer";
interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps): JSX.Element {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNav />
      <MainWrap>
        <LayoutSideBar />
        <PageWrap>{props.children}</PageWrap>
      </MainWrap>
      <LayoutFooter />
    </>
  );
}
