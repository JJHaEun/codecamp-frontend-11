import type { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";
import type {
  // IBoardComment,
  IQuery,
} from "../../../../commons/types/generated/types";

export interface IPropsBoardCommentsListUI {
  data?: Pick<IQuery, "fetchBoardComments">;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  isEdit: boolean;
  isOpen: boolean;
  onClickCheckDelete: (event: MouseEvent<HTMLImageElement>) => void;
  onChangeDeleteCommentsPassword: (
    event: ChangeEvent<HTMLInputElement>
  ) => void;
  onClickDeleteComment: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickHideModal: () => void;
  onClickEdit: (event: MouseEvent<HTMLSpanElement>) => void;
  boardCommentIdEdit: string;
}
// export interface IPropsBoardCommentsListItems {}
// export interface IPropsBoardCommentsListItemsUI {
//   setIsEdit: Dispatch<SetStateAction<boolean>>;
//   isEdit: boolean;
//   isOpen: boolean;
//   onClickCheckDelete: (event: MouseEvent<HTMLImageElement>) => void;
//   onChangeDeleteCommentsPassword: (
//     event: ChangeEvent<HTMLInputElement>
//   ) => void;
//   onClickDeleteComment: (event: MouseEvent<HTMLButtonElement>) => void;
//   onClickHideModal: () => void;
//   onClickEdit: (event: MouseEvent<HTMLSpanElement>) => void;
//   el: IBoardComment;
// }
