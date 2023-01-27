import styled from "@emotion/styled";

export const Header = styled.div`
  height: 60px;
  background-color: red;
  padding-top: 5px;
`;

export const Footer = styled(Header)`
  background-color: green;
`;

export const Nav = styled(Header)`
  background-color: orange;
`;

export const Banner = styled.div`
  height: 300px;
  background-color: #fac6ce;
  padding-top: 5px;
`;
export const Sliders = styled.div`
  display: flex;
  justify-content: center;

  .slick-list {
    width: 800px;
    text-align: center;
  }
`;

export const SlideImg = styled.img`
  width: 800px;
  height: 280px;
  object-fit: contain;
`;

export const Main = styled.div`
  display: flex;
`;
export const Side = styled.div`
  width: 20%;
  height: 350px;
  background-color: skyblue;
  padding-top: 5px;
`;
export const Pages = styled.div`
  width: 70%;
  padding-top: 5px;
`;
