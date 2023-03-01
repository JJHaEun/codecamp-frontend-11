import Link from "next/link";
import InfiniteScroll from "react-infinite-scroller";
import { MessageDate } from "../../../../commons/libraries/date";
import type { IUseditem } from "../../../../commons/types/generated/types";
import { AddLocal } from "../../../commons/hooks/customs/market/onClickMoveAndLocal";
import { useQueryFetchUsedItems } from "../../../commons/hooks/customs/quries/useQueryFetchUsedItems";
import SearchProductBoard from "../../../commons/search/searchProductBoard/SearchProductboard.container";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import * as S from "./fetchUsedItemList.styles";
import { BiCopyright } from "react-icons/bi";
export default function MarketListUI(): JSX.Element {
  const [keyWord, setKeyWord] = useState("");

  const { data, onLoadMore, refetch } = useQueryFetchUsedItems();
  const { onClickAddTodayAndMove } = AddLocal();

  const onChangeKeyWord = (value: string): void => {
    setKeyWord(value);
  };
  return (
    <>
      <SearchProductBoard refetch={refetch} onChangeKeyWord={onChangeKeyWord} />
      <S.InfiniteWrap>
        <InfiniteScroll
          pageStart={0}
          loadMore={onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          <S.MainWrap>
            {data?.fetchUseditems.map((el: IUseditem) => (
              <S.Main key={el._id} onClick={onClickAddTodayAndMove(el)}>
                <S.SellerName>{el.seller?.name}</S.SellerName>
                <div>
                  <S.ProductNameTitle>상품명:</S.ProductNameTitle>
                  {el.name
                    .replaceAll(keyWord, `@#$#@%$#^&*#@${keyWord}@#$#@%$#^&*#@`)
                    .split("@#$#@%$#^&*#@")
                    .map((el) => (
                      <S.SearchKeyWord key={uuidv4()} el={el} keyWord={keyWord}>
                        {el}
                      </S.SearchKeyWord>
                    ))}
                </div>

                <div>{el.remarks}</div>
                <div>
                  {el.price}
                  <BiCopyright />
                </div>
                <S.FooterWrap>
                  <S.TimeAndPick>{MessageDate(el.createdAt)}</S.TimeAndPick>
                  <S.PickNum>
                    <S.PickIcon />
                    {el.pickedCount}
                  </S.PickNum>
                </S.FooterWrap>
                <S.ProductImgWrap>
                  {el.images?.[0] !== undefined && el.images?.[0] !== "" ? (
                    <S.ProductImg
                      src={`https://storage.googleapis.com/${el.images[0]}`}
                      alt=""
                    />
                  ) : (
                    <S.ProductImg src={`/crown.png`} alt="" />
                  )}
                </S.ProductImgWrap>
              </S.Main>
            ))}
          </S.MainWrap>
        </InfiniteScroll>
      </S.InfiniteWrap>
      <S.MoveCreate>
        <Link href={`/market/new`}>
          <a>등록하기</a>
        </Link>
      </S.MoveCreate>
    </>
  );
}
