import { useMutation } from "@apollo/client";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { MessageDate } from "../../../../commons/libraries/date";
import { DELETE_USED_ITEM_QUESTION } from "../question.queries";
import type { IMarketQuestionItemProps, IPrev } from "../question.types";
import MarketQuestionUI from "../write/question.container";

export default function MarketQuestionItem(
  props: IMarketQuestionItemProps
): JSX.Element {
  const [isEdit, setIsEdit] = useState(false);
  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);
  const onClickEdit = (): void => {
    setIsEdit(true);
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
  return (
    <div>
      {!isEdit && (
        <>
          <div>
            <span>{props.el.user.name}</span>
            <div>
              <span>{MessageDate(props.el.createdAt)}</span>
              <div>
                <img
                  src="/delete_icon.png"
                  alt="삭제아이콘"
                  onClick={onClickDelete(props.el._id)}
                />
                <button onClick={onClickEdit}>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </button>
              </div>
              <div>{props.el.contents}</div>
            </div>
          </div>
        </>
      )}
      {isEdit && (
        <MarketQuestionUI el={props.el} isEdit={true} setIsEdit={setIsEdit} />
      )}
    </div>
  );
}
