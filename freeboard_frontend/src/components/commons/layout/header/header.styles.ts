// import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Menu } from "antd";

const SiteNameAnimation = keyframes`
  0%{
    opacity: 0;
    transform: translateY(25px);
  }
  50%{
    transform: translateY(15px);
  }
  100%{
    opacity: 1;
    transform: none;
  }
`;
export const SiteTitle = styled.div`
  transform: rotate(-3deg) translate(50px, 10px);
  /* width: 400px; */
  font-size: 48px;
  padding-left: 5px;
  /* margin-top: 90px; */
  /* padding-bottom: 15px; */
  font-family: "nanum_somi", "Franklin Gothic Medium", "Arial Narrow", Arial,
    sans-serif;
  :hover {
    color: steelblue;
    cursor: pointer;
  }
`;
export const SiteNameWrap = styled.article`
  margin-left: 80px;
  padding-top: 120px;

  animation: ${SiteNameAnimation} 2s linear 1;

  header:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    gap: 15px 45px;
  }
  header h2 {
    width: 400px;
    font-size: 30px;
    font-family: "KOTRA_BOLD-Bold", sans-serif;
  }
`;

export const MeNuImg = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const RightMeNu = styled(Menu)`
  width: 300px;
  position: absolute;
  .ant-menu-title-content {
    color: #b039cc;
  }
  border-radius: 8px;
`;
export const Img = styled.img`
  width: 600px;
  height: 300px;

  margin-top: 80px;
  opacity: 0.5;
  filter: blur(4px);
  -webkit-filter: blur(4px);
`;
export const LeftMeNu = styled(Menu)`
  width: 180px;
  position: absolute;
  z-index: 10;

  opacity: 0.5;
  :hover {
    opacity: 1;
  }
  .anticon > * {
    color: #e4ddce;
  }
  .ant-menu-title-content {
    color: #b039cc;
  }
`;
export const HeaderMenu = styled.div`
  display: flex;
  padding-top: 200px;
`;
export const TitleAndMenu = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 50px;
  /* gap: 0 200px; */
  /* gap: 0px 0px 0px 200px; */
`;
// export const LeftMenuWrap = styled.span`
//   display: flex;
//   gap: 50px;
// `;
// export const LeftMenu = styled.span`
//   font-family: "UhBeeRice";
//   :hover {
//     color: steelblue;
//     cursor: pointer;
//   }
// `;
// export const LoginDownWrap = styled.div`
//   display: flex;
//   gap: 120px;
// `;
// export const RightMenuWrap = styled.span`
//   display: flex;
//   margin-left: 120px;
//   flex-direction: column;
//   gap: 50px;
//   z-index: 10;
//   font-family: "UhBeeRice";
//   background-color: #cd5c5c08;
// `;
// export const RightMenu = styled(LeftMenu)`
//   padding-left: 13px;
//   padding-top: 5px;
// `;
// export const Down = styled(CaretDownOutlined)`
//   :hover {
//     color: steelblue;
//     cursor: pointer;
//   }
//   * {
//     font-size: 18px;
//   }
// `;
// export const Up = styled(CaretUpOutlined)`
//   :hover {
//     color: steelblue;
//     cursor: pointer;
//   }
//   * {
//     font-size: 18px;
//   }
// `;
