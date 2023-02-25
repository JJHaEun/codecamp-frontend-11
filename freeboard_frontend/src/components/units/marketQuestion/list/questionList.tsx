import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroller";
import type {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
  IUseditemQuestion,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM_QUESTIONS } from "../question.queries";
import MarketQuestionItem from "./questionListItem";
import * as S from "./questionList.styles";
export default function MarketQuestionListUI(): JSX.Element {
  const router = useRouter();
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USED_ITEM_QUESTIONS, {
    variables: {
      useditemId: String(router.query.productBoardId),
    },
  });

  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil((data.fetchUseditemQuestions.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditemQuestions === undefined) {
          return {
            fetchUseditemQuestions: [...prev.fetchUseditemQuestions],
          };
        }
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  return (
    <S.QuestionWrap>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        useWindow={false}
      >
        {data?.fetchUseditemQuestions.map((el: IUseditemQuestion) => (
          <div key={el._id}>
            <MarketQuestionItem el={el} />
          </div>
        )) ?? <></>}
      </InfiniteScroll>
    </S.QuestionWrap>
  );
}
