import styled from "@emotion/styled";

export const HeaderWrap = styled.div`
  height: 50px;
  background-color: salmon;
`;
export const BannerWrap = styled.div`
  height: 400px;
  background-color: peachpuff;
`;
export const NavWrap = styled.div`
  height: 80px;
  background-color: tomato;
`;
export const MainWrap = styled.div`
  display: flex;
  /* position: relative; */
`;

export const SideBarWrap = styled.div`
  width: 20%;
  height: 500px;
  border: 1px solid crimson;
  margin-top: 20px;
  position: fixed;
  /* top: -div.height; */
  /* width: 100%; */
  /* transition: top 0.5s; */
`;
export const PageWrap = styled.div`
  width: 80%;
`;
export const FooterWarp = styled(HeaderWrap)`
  background-color: indianred;
`;
