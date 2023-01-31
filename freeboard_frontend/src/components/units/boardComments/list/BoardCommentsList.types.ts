import type { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";
import type {
  IBoardComment,
  IQuery,
} from "../../../../commons/types/generated/types";

export interface IPropsBoardCommentsListUI {
  data?: Pick<IQuery, "fetchBoardComments">;
  isOpen: boolean;
  onClickCheckDelete: (event: MouseEvent<HTMLImageElement>) => void;
  onChangeDeleteCommentsPassword: (
    event: ChangeEvent<HTMLInputElement>
  ) => void;
  onClickDeleteComment: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickHideModal: () => void;
  boardCommentId: string;
  setBoardCommentId: Dispatch<SetStateAction<string>>;
  onLoadMore: () => void;
}

export interface IPropsBoardCommentsListItems {
  isOpen: boolean;
  onClickCheckDelete: (event: MouseEvent<HTMLImageElement>) => void;
  onChangeDeleteCommentsPassword: (
    event: ChangeEvent<HTMLInputElement>
  ) => void;
  onClickDeleteComment: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickHideModal: () => void;
  el: IBoardComment;
  boardCommentId: string;
  setBoardCommentId: Dispatch<SetStateAction<string>>;
}
