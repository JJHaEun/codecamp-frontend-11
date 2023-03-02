import { useQuery } from "@apollo/client";
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
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: String(props.el?._id),
    },
  });

  return (
    <div>
      {data?.fetchUseditemQuestionAnswers.map((el: IUseditemQuestionAnswer) => (
        <div key={el._id}>
          <MarketAnswerListItemUI el={el} />
        </div>
      )) ?? <></>}
    </div>
  );
}
