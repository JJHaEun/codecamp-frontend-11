import Link from "next/link";
import InfiniteScroll from "react-infinite-scroller";
import { MessageDate } from "../../../../commons/libraries/date";
import type { IUseditem } from "../../../../commons/types/generated/types";
import { AddLocal } from "../../../commons/hooks/customs/market/onClickMoveAndLocal";
import { useQueryFetchUsedItems } from "../../../commons/hooks/customs/quries/useQueryFetchUsedItems";
import { FcLike } from "react-icons/fc";
import SearchProductBoard from "../../../commons/search/searchProductBoard/SearchProductboard.container";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import * as S from "./fetchUsedItemList.styles";
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
      <div style={{ width: "1119px", height: "400px", overflow: "auto" }}>
        <InfiniteScroll
          pageStart={0}
          loadMore={onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          {data?.fetchUseditems.map((el: IUseditem) => (
            <div key={el._id} onClick={onClickAddTodayAndMove(el)}>
              {el.images?.[0] !== undefined ? (
                <img
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                  alt=""
                />
              ) : (
                <img src={`/crown.png`} />
              )}
              <h1>{el.seller?.name}</h1>
              <div>
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

              <footer>
                <div>{MessageDate(el.createdAt)}</div>
                <div>
                  <FcLike />
                  {el.pickedCount}
                </div>
              </footer>
            </div>
          ))}
        </InfiniteScroll>
      </div>
      <button>
        <Link href={`/market/new`}>
          <a>등록하기</a>
        </Link>
      </button>
    </>
  );
}
