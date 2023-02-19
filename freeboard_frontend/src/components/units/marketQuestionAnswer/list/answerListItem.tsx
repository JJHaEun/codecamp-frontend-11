import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { MessageDate } from "../../../../commons/libraries/date";
import type { IMarketAnswerListItemUIProps } from "../answer.types";
import MarketAnswerUI from "../write/answer";

export default function MarketAnswerListItemUI(
  props: IMarketAnswerListItemUIProps
): JSX.Element {
  const [isEdit, setIsEdit] = useState(false);

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
                <img src="/delete_icon.png" alt="삭제아이콘" />
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
