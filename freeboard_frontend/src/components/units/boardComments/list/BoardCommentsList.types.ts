import {
  IBoardComment,
  IQuery,
} from "../../../../commons/types/generated/types";

export interface IPropsBoardCommentsListUI {
  data?: Pick<IQuery, "fetchBoardComments">;
}
export interface IPropsBoardCommentsListItems {
  el: IBoardComment;
}
