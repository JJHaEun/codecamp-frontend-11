import { Banner, Sliders, SlideImg } from "../Layout.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBanner(): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  };
  return (
    <>
      <Banner>
        <Sliders>
          <Slider {...settings}>
            <div>
              <SlideImg src="/banner_img1.png" />
            </div>
            <div>
              <SlideImg src="/banner_img1.png" />
            </div>
            <div>
              <SlideImg src="/banner_img1.png" />
            </div>
            <div>
              <SlideImg src="/banner_img1.png" />
            </div>
          </Slider>
        </Sliders>
      </Banner>
    </>
  );
}
