import { BannerWrap } from "../layout.styles";
import Slider from "react-slick";
import * as S from "./banner.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { ILayoutBannerUIProps } from "./banner.types";

export default function LayoutBannerUI(
  props: ILayoutBannerUIProps
): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
  };

  return (
    <>
      <BannerWrap>
        <Slider {...settings}>
          <div>
            <S.BannerImges src="/banner_01.png" />
          </div>
          <div>
            <S.BannerImges2
              src="/banner_02.png"
              id="firebaseuse"
              onClick={props.onClickMove}
            />
          </div>
          <div>
            <S.BannerImges
              src="/banner_03.png"
              id="markets"
              onClick={props.onClickMove}
            />
          </div>
          <div>
            <S.BannerImges src="/banner_04.png" />
          </div>
          <div>
            <S.BannerImges src="/banner_05.png" />
          </div>
        </Slider>
      </BannerWrap>
    </>
  );
}
