import type { Dispatch, SetStateAction } from "react";
import type {
  IUseditemQuestion,
  IUseditemQuestionAnswer,
} from "../../../commons/types/generated/types";

export interface CreateAnswerFrom {
  contents: string;
}
export interface IPrev {
  __ref: string;
}
export interface IMarketAnswerUIProps {
  el?: IUseditemQuestion;
  elAnswer?: IUseditemQuestionAnswer;
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  setOpen?: Dispatch<SetStateAction<boolean>>;
}
export interface MarketAnswerListUIProps {
  el?: IUseditemQuestion;
}
export interface IMarketAnswerListItemUIProps {
  el: IUseditemQuestionAnswer;
}
