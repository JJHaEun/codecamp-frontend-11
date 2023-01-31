import { useQuery, gql } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import InfiniteScroll from "react-infinite-scroller";
const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function MapBoardPage(): JSX.Element {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onLoadMore = (): void => {
    if (data === undefined) return;
    // 더 불러오기 refetch는 새롭게 받아오는것
    // fetchMore는 기존거 두고 새로운거를 더 받아오는것
    void fetchMore({
      variables: { page: Math.ceil((data?.fetchBoards.length ?? 10) / 10) + 1 }, // 현 페이지 + 1 => 다음페이지.(다음페[이지를 부르는것. 따라서 +1 필요.)
      updateQuery: (prev, { fetchMoreResult }) => {
        // prev는 지급 가지고있는것. // ...prev.fetchBoards  기존에 받아놓은 10개 있음
        if (fetchMoreResult.fetchBoards === undefined) {
          // 추가로 받는것이 없다면
          return {
            fetchBoards: [...prev.fetchBoards],
          };
        }
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult?.fetchBoards],
          // 기존것에 없데이트된것으로 바꿔치기..(추가))
        };
      },
    });
  };
  return (
    <div>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        useWindow={false}
        style={{ height: "800px", overflow: "hidden" }}
      >
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>
            {/* inline요소여야 한줄로 보이게되니 span태그로 감싸줌 */}
            <span style={{ margin: "10px" }}>{el.title}</span>
            <span style={{ margin: "10px" }}>{el.writer}</span>
          </div>
        )) ?? <div></div>}
        {/* data가 없을때는 빈것이라도 주게하여 무한스크롤시 콘솔창에 에러 안뜨게 처리 */}
      </InfiniteScroll>
    </div>
  );
}
