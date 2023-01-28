import styled from "@emotion/styled";

export const HeaderWrap = styled.div`
  height: 80px;
  background-color: indianred;
`;
export const BannerWrap = styled.div`
  height: 400px;
  /* background-color: lavenderblush; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .slick-slider {
    width: 800px;
    height: 360px;
    .slick-list {
      width: 100%;
      height: 100%;
    }
  }

  .slick-arrow {
    /* width: 800px; */
  }
  .slick-prev:before {
    /* color: palevioletred; */
  }
  .slick-next:before {
    /* color: palevioletred; */
  }
  ul {
    margin-bottom: 5px;
  }

  ul li button:before {
    color: indianred;
  }
  .slick-dots li.slick-active button:before {
    color: darkred;
  }
`;

export const NavWrap = styled.div`
  height: 100px;
  background-color: palevioletred;
`;
export const MainWrap = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const SideBarWrap = styled.div`
  width: 10%;
  height: 500px;
  border: 2px solid coral;
  border-radius: 3px;
  background-color: snow;
  margin: 80px 0;
  position: sticky;
  top: 150px;
  left: 10px;
  /* width: 100%; */
  /* transition: top 0.5s; */
`;
export const PageWrap = styled.div`
  width: 90%;
  padding-left: 30px;
`;
export const FooterWarp = styled(HeaderWrap)`
  margin-top: 50px;
`;
