import { useMutation } from "@apollo/client";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "antd";
import { useState } from "react";
import { MessageDate } from "../../../../commons/libraries/date";
import type {
  IMutation,
  IMutationDeleteUseditemQuestionAnswerArgs,
} from "../../../../commons/types/generated/types";
import type { IPrev } from "../../marketQuestion/question.types";
import { DELETE_USED_ITEM_QUESTION_ANSWER } from "../answer.queris";
import type { IMarketAnswerListItemUIProps } from "../answer.types";
import MarketAnswerUI from "../write/answer";

export default function MarketAnswerListItemUI(
  props: IMarketAnswerListItemUIProps
): JSX.Element {
  const [isEdit, setIsEdit] = useState(false);
  const [deleteUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "deleteUseditemQuestionAnswer">,
    IMutationDeleteUseditemQuestionAnswerArgs
  >(DELETE_USED_ITEM_QUESTION_ANSWER);

  const onClickDeleteAnswer = (id: string) => async () => {
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: id,
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchBoards: (prev: IPrev[], { readField }) => {
                // IPrev라는 타입의 배열이라는 말
                const deletedId = data?.deleteUseditemQuestionAnswer; // 삭제된 아이디
                const filteredPrev = prev.filter(
                  (el) => readField("_id", el) !== deletedId
                ); // 다른것만 필터링해줘// 필터된것들(삭제가 적용된..)
                // readField("_id",el) readField헤서 _id를 꺼내와줘. el에서
                return [...filteredPrev]; // 그런데, prev안의 el이 객체로 들어오지않음. __ref라는 키에 해당 주소만 가지고있음. 그래서 ._id가없고 이 주소를 타고가서 ._id를 찾아와야함.
              },
            },
          });
        },
      });
      Modal.success({ content: "성공적으로 삭제되었습니다" });
    } catch (error) {
      if (error instanceof Error) Modal.info({ content: error.message });
    }
  };

  const onClickopenEdit = () => {
    setIsEdit(true);
  };
  return (
    <>
      {!isEdit && (
        <>
          <div>
            <span>{props.el.user.name}</span>
            <div>
              <div>{MessageDate(props.el.createdAt)}</div>
              <div>
                <img
                  src="/delete_icon.png"
                  alt="삭제아이콘"
                  onClick={onClickDeleteAnswer(props.el._id)}
                />
                <button onClick={onClickopenEdit}>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </button>
              </div>
            </div>
          </div>
          <div>{props.el.contents}</div>
        </>
      )}
      {isEdit && (
        <MarketAnswerUI
          elAnswer={props.el}
          isEdit={true}
          setIsEdit={setIsEdit}
        />
      )}
    </>
  );
}
