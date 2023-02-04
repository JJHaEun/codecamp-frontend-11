import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import type {
  IBoardComment,
  IQuery,
} from "../../../../commons/types/generated/types";

export interface IPropsBoardCommentsUI {
  onClickCreateBoardComment: () => void;
  onChangeCommentWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeRating: (rating: number) => void;
  onClickEditComment: () => void;
  writer: string;
  contents: string;
  password: string;
  rating: number;
  data?: Pick<IQuery, "fetchBoardComments">;
  isEdit?: boolean;
  el?: IBoardComment;
  // onClickCancelEdit: () => void;
}
export interface IMyupdateComment {
  contents?: string;
  rating?: number;
}

export interface IPropsBoardComments {
  el?: IBoardComment;
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  // boardCommentIdEdit: string;
  boardCommentId?: string;
  id?: any;
}
