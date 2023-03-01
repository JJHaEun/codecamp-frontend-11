import Link from "next/link";
import InfiniteScroll from "react-infinite-scroller";
import { BiCopyright } from "react-icons/bi";
import { MessageDate } from "../../../../../commons/libraries/date";
import { useQueryFetchPointTransactionCountOfLoading } from "../../../../commons/hooks/customs/quries/useQueryFetchPointTransactionCountOfLoading";
import { useQueryFetchPointTransactionsOfLoading } from "../../../../commons/hooks/customs/quries/useQueryFetchPointTransactionsOfLoading";
import * as S from "../point.styles";
import MyPageMyInFo from "../../mypage";

export default function MayPageMain(): JSX.Element {
  const { data } = useQueryFetchPointTransactionCountOfLoading();
  const { data: PointLoadFetch, fetchMore } =
    useQueryFetchPointTransactionsOfLoading();
  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page:
          Math.ceil(
            (PointLoadFetch?.fetchPointTransactionsOfLoading.length ?? 10) / 10
          ) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchPointTransactionsOfLoading === undefined) {
          return {
            fetchPointTransactionsOfLoading: [
              ...prev.fetchPointTransactionsOfLoading,
            ],
          };
        }
        return {
          fetchPointTransactionsOfLoading: [
            ...prev.fetchPointTransactionsOfLoading,
            ...fetchMoreResult.fetchPointTransactionsOfLoading,
          ],
        };
      },
    });
  };
  return (
    <>
      <MyPageMyInFo />
      <S.PointPageWrap>
        <S.MyPoint>
          <S.PTitle>
            <S.PointTitle>포인트 내역</S.PointTitle>
            <h2>
              {PointLoadFetch?.fetchPointTransactionsOfLoading[0].balance}
              <BiCopyright />
            </h2>
          </S.PTitle>
          <Link href={`/myPage/point`}>
            <a>내포인트 충전</a>
          </Link>
        </S.MyPoint>
        <div style={{ height: "150px", overflow: "auto" }}>
          <InfiniteScroll
            pageStart={0}
            loadMore={onLoadMore}
            hasMore={true}
            useWindow={false}
          >
            {PointLoadFetch?.fetchPointTransactionsOfLoading.map((el) => (
              <div key={el._id}>
                <div>
                  <span>{el.status}</span>
                  <span>
                    {el.amount} <BiCopyright />
                  </span>
                </div>
                <div>{MessageDate(el.createdAt)}</div>
                <div>
                  잔액: {el.balance} <BiCopyright />
                </div>
              </div>
            ))}
          </InfiniteScroll>
          <div>
            포인트 충전횟수: {data?.fetchPointTransactionsCountOfLoading}
          </div>
        </div>
      </S.PointPageWrap>
    </>
  );
}
