import Link from "next/link";
import InfiniteScroll from "react-infinite-scroller";
import { MessageDate } from "../../../../commons/libraries/date";
import type { IUseditem } from "../../../../commons/types/generated/types";
import { AddLocal } from "../../../commons/hooks/customs/market/onClickMoveAndLocal";
import { useQueryFetchUsedItems } from "../../../commons/hooks/customs/quries/useQueryFetchUsedItems";
import { FcLike } from "react-icons/fc";

export default function MarketListUI(): JSX.Element {
  const { data, onLoadMore } = useQueryFetchUsedItems();
  const { onClickAddTodayAndMove } = AddLocal();
  return (
    <>
      <div style={{ width: "1119px", height: "400px", overflow: "auto" }}>
        <InfiniteScroll
          pageStart={0}
          loadMore={onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          {data?.fetchUseditems.map((el: IUseditem) => (
            <div key={el._id} onClick={onClickAddTodayAndMove(el)}>
              {el.images !== undefined && el.images !== null && (
                <img
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                  alt=""
                />
              )}
              <h1>{el.seller?.name}</h1>
              <div>{el.name}</div>

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
