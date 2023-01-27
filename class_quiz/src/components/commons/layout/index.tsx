import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import LayoutSideBar from "./sidebar";
import * as S from "./Layout.styles";

interface ILayoutprops {
  children: JSX.Element;
}

export default function Layout(props: ILayoutprops): JSX.Element {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <S.Main>
        <LayoutSideBar />
        <S.Pages>{props.children}</S.Pages>
      </S.Main>
      <LayoutFooter />
    </>
  );
}
