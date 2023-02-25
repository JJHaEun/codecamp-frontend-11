import { useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroller";
import type {
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
  IUseditemQuestionAnswer,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "../answer.queris";
import type { MarketAnswerListUIProps } from "../answer.types";
import MarketAnswerListItemUI from "./answerListItem";

export default function MarketAnswerListUI(
  props: MarketAnswerListUIProps
): JSX.Element {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: String(props.el?._id),
    },
  });

  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page:
          Math.ceil((data.fetchUseditemQuestionAnswers.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditemQuestionAnswers === undefined) {
          return {
            fetchUseditemQuestionAnswers: [
              ...prev.fetchUseditemQuestionAnswers,
            ],
          };
        }
        return {
          fetchUseditemQuestionAnswers: [
            ...prev.fetchUseditemQuestionAnswers,
            ...fetchMoreResult.fetchUseditemQuestionAnswers,
          ],
        };
      },
    });
  };

  return (
    <div style={{ width: "1119px", height: "400px", overflow: "auto" }}>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        useWindow={false}
      >
        {data?.fetchUseditemQuestionAnswers.map(
          (el: IUseditemQuestionAnswer) => (
            <div key={el._id}>
              <MarketAnswerListItemUI el={el} />
            </div>
          )
        ) ?? <></>}
      </InfiniteScroll>
    </div>
  );
}
