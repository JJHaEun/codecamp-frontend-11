import styled from "@emotion/styled";

export const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 100%;
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
  /* position: relative; */
  width: 100%;
  gap: 2%;
  padding-top: 100px;
  padding-bottom: 50px;
`;

// export const SideBarWrap = styled.div`
//   width: calc(100% - 75%);
//   /* border: 2px solid coral; */
//   border-radius: 3px;
//   margin: 80px 0;
//   padding-top: 20px;

/* width: 100%; */
/* transition: top 0.5s; */
// `;
export const PageWrap = styled.div`
  width: 75%;

  /* padding-left: 30px; */
`;
export const FooterWarp = styled(HeaderWrap)`
  height: 200px;
`;
