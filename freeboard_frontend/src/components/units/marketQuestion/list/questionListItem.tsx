import { useMutation } from "@apollo/client";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { MessageDate } from "../../../../commons/libraries/date";
import MarketAnswerUI from "../../marketQuestionAnswer/write/answer";
import { DELETE_USED_ITEM_QUESTION } from "../question.queries";
import type { IMarketQuestionItemProps, IPrev } from "../question.types";
import MarketQuestionUI from "../write/question.container";
import * as S from "./questionList.styles";

export default function MarketQuestionItem(
  props: IMarketQuestionItemProps
): JSX.Element {
  const [isEdit, setIsEdit] = useState(false);
  const [open, setOpen] = useState(false);
  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);
  const onClickEdit = (): void => {
    setIsEdit((prev) => !prev);
  };

  const onClickDelete = (id: string) => async (): Promise<void> => {
    await deleteUseditemQuestion({
      variables: {
        useditemQuestionId: id,
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchUseditemQuestions: (prev: IPrev[], { readField }) => {
              const deletedId = data.deleteUseditemQuestion;
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId
              );
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };

  const openAnswer = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <div>
        {!isEdit && (
          <>
            <span>{props.el.user.name}</span>
            <div>
              <span>{MessageDate(props.el.createdAt)}</span>
              <div>
                <S.ADeleteImg
                  src="/delete_icon.png"
                  alt="삭제아이콘"
                  onClick={onClickDelete(props.el._id)}
                />
                <S.AEdit onClick={onClickEdit}>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </S.AEdit>
                <button onClick={openAnswer}>답변</button>
              </div>
              <div>{props.el.contents}</div>
            </div>
          </>
        )}
        {isEdit && (
          <MarketQuestionUI el={props.el} isEdit={true} setIsEdit={setIsEdit} />
        )}
      </div>
      {open && <MarketAnswerUI el={props.el} setOpen={setOpen} />}
    </>
  );
}
