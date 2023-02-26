import DOMPurify from "dompurify";
import Link from "next/link";
import { useRouter } from "next/router";
import Slider from "react-slick";
import { MessageDate } from "../../../../commons/libraries/date";
import { useOnClickBuy } from "../../../commons/hooks/customs/market/useOnClickBuy";
import { useDeleteUsedItem } from "../../../commons/hooks/customs/market/useOnclickDeleteUsedItem";
import { useQueryFetchUsedItem } from "../../../commons/hooks/customs/quries/useQueryFetchUsedItem";
import MarketQuestionListUI from "../../marketQuestion/list/questionList";
import MarketQuestionUI from "../../marketQuestion/write/question.container";
import KakaoMap from "../kakaoMap/kakaoMap";
import * as S from "./fetchUsedItem.styles";
import { FcLike } from "react-icons/fc";
import { useOnClickPick } from "../../../commons/hooks/customs/market/useOnClickPick";

declare const window: typeof globalThis & {
  kakao: any;
};
export default function MarketDetailUI() {
  const router = useRouter();
  const { onClickDelete } = useDeleteUsedItem();
  const { data } = useQueryFetchUsedItem();
  const { onClickBuy } = useOnClickBuy();
  const { onClickPick } = useOnClickPick();

  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
  };
  return (
    <>
      <S.ProductDetailWrap>
        <S.Title>
          <S.Sellers>
            판매자 : <S.Seller>{data?.fetchUseditem.seller?.name}</S.Seller>
          </S.Sellers>
          <div>{MessageDate(String(data?.fetchUseditem.createdAt))}</div>
        </S.Title>
        <S.NameAndLikeWrap>
          <S.ProductName>
            <div>상품명 :</div>
            <h2>{data?.fetchUseditem.name}</h2>
          </S.ProductName>
          <S.PickWrap>
            <span onClick={onClickPick(String(router.query.productBoardId))}>
              <FcLike />
            </span>
            <S.PickNumber>{data?.fetchUseditem.pickedCount}</S.PickNumber>
          </S.PickWrap>
        </S.NameAndLikeWrap>
        <S.SliderWrap>
          <Slider {...settings}>
            {data?.fetchUseditem.images
              ?.filter((el) => el)
              .map((el) => (
                <S.ImgWrap key={el}>
                  <S.ProductImg src={`https://storage.googleapis.com/${el}`} />
                </S.ImgWrap>
              ))}
          </Slider>
        </S.SliderWrap>
        <div>
          <S.ProductRemarks>{data?.fetchUseditem.remarks}</S.ProductRemarks>
          <S.AddressGroup>
            <S.Address>
              <span>{data?.fetchUseditem.useditemAddress?.address}</span>
              <span>{data?.fetchUseditem.useditemAddress?.addressDetail}</span>
            </S.Address>

            {data?.fetchUseditem.useditemAddress?.address !== undefined &&
            data?.fetchUseditem.useditemAddress?.address !== null &&
            data.fetchUseditem.useditemAddress.address !== "" ? (
              <KakaoMap />
            ) : (
              <></>
            )}
          </S.AddressGroup>
          {typeof window !== "undefined" ? (
            <S.Contents
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  String(data?.fetchUseditem.contents)
                ),
              }}
            ></S.Contents>
          ) : (
            <S.Contents></S.Contents>
          )}
        </div>
      </S.ProductDetailWrap>
      <S.ButtonWrap>
        <S.Buttons>
          <Link href={`/market/${String(router.query.productBoardId)}/edit`}>
            <S.ALink>수정하기</S.ALink>
          </Link>
        </S.Buttons>
        <S.Buttons onClick={onClickDelete}>삭제하기</S.Buttons>
        <S.Buttons>
          <Link href={`/market`}>
            <S.ALink>목록으로</S.ALink>
          </Link>
        </S.Buttons>
        <button onClick={onClickBuy}>구매하기</button>
      </S.ButtonWrap>
      <MarketQuestionUI />
      <MarketQuestionListUI />
    </>
  );
}
