import Link from "next/link";
import InfiniteScroll from "react-infinite-scroller";
import { MessageDate } from "../../../../commons/libraries/date";
import type { IUseditem } from "../../../../commons/types/generated/types";
import { useQueryFetchUsedItems } from "../../../commons/hooks/customs/quries/useQueryFetchUsedItems";

export default function MarketListUI(): JSX.Element {
  const { data, onLoadMore } = useQueryFetchUsedItems();

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
            <div key={el._id}>
              {el.images !== undefined && el.images !== null && (
                <img
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                  alt=""
                />
              )}
              <div>{el.name}</div>
              <Link href={`/market/${el._id}`}>
                <a>{el.remarks}</a>
              </Link>
              <footer>
                <div>{MessageDate(el.createdAt)}</div>
                <div>{el.pickedCount}</div>
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
