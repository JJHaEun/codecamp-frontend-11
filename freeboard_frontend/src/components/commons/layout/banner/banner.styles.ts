import { CrownFilled, DislikeOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IPropsStyle } from "./banner.types";

export const Banner = styled.div`
  color: #003458;
  /* width: 80px; */
  height: 180px;
  border: 1px solid #ff4500;
  border-radius: 10px;
  opacity: 1;
  background-color: ${(props: IPropsStyle) => props.getRandomColor};
  /* transform: scale(1.04); */
  :hover {
    cursor: pointer;
  }
`;
export const BannerTop = styled(Banner)`
  line-height: 50px !important;
`;
export const BestMainCrown = styled(CrownFilled)`
  color: gold;
  font-size: 15px;
`;

export const Move = styled.span`
  font-size: 13px;
  color: silver;
  border-bottom: 1px solid silver;
  padding-bottom: 0.5px;
  :hover {
    color: #005666;
    cursor: pointer;
  }
`;
export const Picks = styled.span`
  font-size: 10px;
  padding-right: 10px;
  padding-left: 10px;
`;
export const Like = styled(FontAwesomeIcon)`
  color: red;
  font-size: 10px;
`;
export const Dislike = styled(DislikeOutlined)`
  * {
    font-size: 10px;
  }
`;
export const BannerWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .center .slick-center div:nth-of-type(1) {
    /* center 모드일때 center에게 강조할 경우 사용 */
    color: #003458;
    /* width: 40%; */

    opacity: 1;
    transform: scale(1.05);
  }
  div:nth-of-type(1) {
    line-height: 30px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 5px;
    padding: 1.5%;
    position: relative;
  }
  .center div:nth-of-type(1) {
    /* center 모드일때 center 외 속성에게 사용 */
    opacity: 0.8;
    transition: all 300ms ease;
    transform: scale(1);
  }
  .slick-slider {
    width: 80%;

    height: 300px;
    .slick-list {
      width: 100%;
      height: 100%;
    }
  }

  .slick-arrow {
    /* display: flex;
    */
    z-index: 10;
  }
  .slick-prev:before,
  .slick-next:before {
    color: palevioletred;
    font-size: 30px;
    /* display: none; */
  }

  ul {
    margin-bottom: 30px;
  }

  ul li button:before {
    color: indianred;
  }
  .slick-dots li.slick-active button:before {
    color: darkred;
  }
`;
// export const ImgWrap = styled.div`
//   ${BannerImges} {
//     /* center 옵션의 경우 MultiTem 속성을 추가로 사용해서 내부 옵션을 추가로 줘야함 */

//     line-height: 100px;
//     margin: 10px;
//     padding: 2%;
//     position: relative;
//     text-align: center;
//   }
// `;
