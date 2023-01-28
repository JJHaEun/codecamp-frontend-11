import { BannerWrap } from "../layout.styles";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBanner(): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <BannerWrap>
        <Slider {...settings}>
          <div>
            <img src="/banner_img_1.png" />
          </div>
          <div>
            <img src="/banner_img_2.png" />
          </div>
          <div>
            <img src="/banner_img_3.png" />
          </div>
        </Slider>
      </BannerWrap>
    </>
  );
}
