import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";
import {
  IBoardComment,
  IQuery,
} from "../../../../commons/types/generated/types";

export interface IPropsBoardCommentsListUI {
  data?: Pick<IQuery, "fetchBoardComments">;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  isEdit: boolean;
  isOpen: boolean;
  onClickCheckDelete: () => void;
  onChangeDeleteCommentsPassword: (
    event: ChangeEvent<HTMLInputElement>
  ) => void;
  onClickDeleteComment: (event: any) => void;
  onClickHideModal: () => void;
  onClickEdit: () => void;
}
export interface IPropsBoardCommentsListItems {
  el: IBoardComment;
}
