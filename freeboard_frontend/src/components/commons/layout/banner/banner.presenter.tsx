import Slider from "react-slick";
import * as S from "./banner.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { ILayoutBannerUIProps } from "./banner.types";
import Link from "next/link";

export default function LayoutBannerUI(
  props: ILayoutBannerUIProps
): JSX.Element {
  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    centerPadding: "30px",
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
  };

  return (
    <>
      <S.BannerWrap>
        <Slider {...settings}>
          <S.BannerImges>
            <div>총 게시물수</div>
            <div>게시글 총 수: {props.data?.fetchBoardsCount} 개</div>
            <Link href={"/boards"}>상세보기</Link>
          </S.BannerImges>
          <S.BannerImges>
            {/* <S.BannerImges src="/banner_01.png" /> */}2
          </S.BannerImges>
          <S.BannerImges>
            {/* <S.BannerImges src="/banner_01.png" /> */}3
          </S.BannerImges>
          <S.BannerImges>
            {/* <S.BannerImges src="/banner_01.png" /> */}4
          </S.BannerImges>
          <S.BannerImges>
            {/* <S.BannerImges src="/banner_01.png" /> */}5
          </S.BannerImges>
          {/* <div>
            <S.BannerImges2
              src="/banner_02.png"
              id="firebaseuse"
              onClick={props.onClickMove}
            />
          </div> */}
          {/* <div>
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
          </div> */}
        </Slider>
      </S.BannerWrap>
    </>
  );
}
