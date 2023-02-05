import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const SiteTitle = styled.div`
  transform: rotate(-3deg) translateY(-15px);
  font-size: 48px;
  padding-left: 32px;
  padding-top: 10px;
  padding-bottom: 0.5vh;
  font-family: "nanum_somi", "Franklin Gothic Medium", "Arial Narrow", Arial,
    sans-serif;
  @font-face {
    font-family: "nanum_somi";
    src: url("/font/nanum_somi.ttf");
  }
  :hover {
    color: steelblue;
    cursor: pointer;
  }
`;

export const HeaderMenu = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 5vw;
`;

export const LeftMenuWrap = styled.span`
  display: flex;
  gap: 3vw;
`;
export const LeftMenu = styled.span`
  font-family: "UhBeeRice";
  :hover {
    color: steelblue;
    cursor: pointer;
  }
  @font-face {
    font-family: "UhBeeRice";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_five@.2.0/UhBeeRice.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;
export const LoginDownWrap = styled.div`
  display: flex;
  gap: 4vw;
`;
export const RightMeneWrap = styled.span`
  display: flex;
  flex-direction: column;
  gap: 4vh;
  z-index: 10;
  font-family: "UhBeeRice";
  background-color: #cd5c5c08;
`;
export const RightMenu = styled(LeftMenu)`
  padding-left: 1vw;
`;
export const Down = styled(CaretDownOutlined)`
  :hover {
    color: steelblue;
    cursor: pointer;
  }
  * {
    font-size: 18px;
  }
`;
export const Up = styled(CaretUpOutlined)`
  :hover {
    color: steelblue;
    cursor: pointer;
  }
  * {
    font-size: 18px;
  }
`;
