import type { Dispatch, SetStateAction } from "react";
import type { IUseditemQuestion } from "../../../commons/types/generated/types";
export interface IQuestionForm {
  contents: string;
}

export interface IMarketQuestionItemProps {
  el: IUseditemQuestion;
}
export interface IMarketQuestionUIProps {
  el?: IUseditemQuestion;
  useditemQuestionId?: string;
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
}
export interface IPrev {
  __ref: string;
}
