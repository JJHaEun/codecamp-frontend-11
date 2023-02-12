import styled from "@emotion/styled";

export const BannerImges = styled.div`
  color: #e67e22;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  height: 200px;
  border: 1px solid #ff4500;
  border-radius: 10px;
  opacity: 1;
  object-fit: cover;

  /* transform: scale(1.04); */
  :hover {
    cursor: pointer;
  }
`;
export const BannerImges2 = styled(BannerImges)``;
export const Move = styled.div``;
export const BannerWrap = styled.div`
  display: flex;

  justify-content: center;
  text-align: center;
  .center .slick-center div:nth-of-type(1) {
    /* center 모드일때 center에게 강조할 경우 사용 */
    color: #e67e22;
    /* width: 40%; */

    opacity: 1;
    transform: scale(1.05);
  }
  div:nth-of-type(1) {
    line-height: 50px;

    margin: 0 10px;
    padding: 2%;
    position: relative;
    text-align: center;
  }
  .center div:nth-of-type(1) {
    /* center 모드일때 center 외 속성에게 사용 */
    opacity: 0.8;
    transition: all 300ms ease;
    transform: scale(1);
  }
  .slick-slider {
    width: 70%;

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
  }

  ul {
    margin-bottom: 25px;
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
