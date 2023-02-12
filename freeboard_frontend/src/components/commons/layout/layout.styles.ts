import styled from "@emotion/styled";

export const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  /* position: relative; */
  background-color: #f1e5d8;
`;

export const NavWrap = styled.div`
  height: 10px;
  background-color: #e67e22;
`;
export const MainWrap = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding-top: 100px;
  padding-bottom: 50px;
`;

export const SideBarWrap = styled.div`
  width: 10%;
  height: 400px;
  /* border: 2px solid coral; */
  border-radius: 3px;
  background-color: #cd5c5c08;
  margin: 80px 0;
  position: sticky;
  top: 150px;
  left: 10px;
  padding-top: 20px;

  /* width: 100%; */
  /* transition: top 0.5s; */
`;
export const PageWrap = styled.div`
  width: calc(90%-10%);

  padding-left: 30px;
`;
export const FooterWarp = styled(HeaderWrap)`
  height: 200px;
`;
