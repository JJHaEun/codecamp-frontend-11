import { gql, useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroller";
// import InfiniteScroll from "react-infinite-scroller";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import * as S from "./16-1-styles";
const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

export default function InfinitiScroll(): JSX.Element {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: { page: Math.ceil((data?.fetchBoards.length ?? 10) / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoards === undefined) {
          return {
            fetchBoards: [...prev.fetchBoards],
          };
        }
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult?.fetchBoards],
        };
      },
    });
  };

  return (
    <>
      <S.ListWrap>
        <S.Row>
          <S.BoardN>번호</S.BoardN>
          <S.Title>제목</S.Title>
          <S.Writer>작성자</S.Writer>
        </S.Row>
        <S.InfiniteWrap>
          <InfiniteScroll
            pageStart={0}
            loadMore={onLoadMore}
            hasMore={true}
            useWindow={false}
          >
            {data?.fetchBoards?.map((el) => (
              <S.Row key={el._id}>
                <S.BoardN>{el._id.substring(el._id.length - 4)}</S.BoardN>
                <S.Title>{el.title}</S.Title>
                <S.Writer>{el.writer}</S.Writer>
              </S.Row>
            )) ?? <div></div>}
          </InfiniteScroll>
        </S.InfiniteWrap>
      </S.ListWrap>
    </>
  );
}
