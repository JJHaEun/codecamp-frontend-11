import Slider from "react-slick";
import * as S from "./banner.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { ILayoutBannerUIProps } from "./banner.types";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
export default function LayoutBannerUI(
  props: ILayoutBannerUIProps
): JSX.Element {
  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    centerPadding: "80px",
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
  };

  return (
    <>
      <S.BannerWrap>
        <Slider {...settings}>
          <S.BannerTop>
            <h2>총 게시물수</h2>
            <div>게시글 총 수: {props.data?.fetchBoardsCount} 개</div>
            <S.Move onClick={props.onClickMoveList}>커뮤니티로 이동</S.Move>
          </S.BannerTop>
          {props.bestBoards?.fetchBoardsOfTheBest.map((el, i) => (
            <S.Banner
              key={el._id}
              onClick={props.onClickMove}
              getRandomColor={props.getRandomColor}
            >
              <h2>
                <S.BestMainCrown /> Best #{i + 1}
              </h2>
              <div>작성자: {el.writer}</div>
              <div>제목: {el.title}</div>
              <S.Picks>
                <S.Like icon={faHeart} />
                {el.likeCount}
              </S.Picks>
              <S.Picks>
                <S.Dislike /> {el.dislikeCount}
              </S.Picks>
              <div>
                <S.Move id={el._id} onClick={props.onClickMove}>
                  상세보기
                </S.Move>
              </div>
            </S.Banner>
          ))}

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
