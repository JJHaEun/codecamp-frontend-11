import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IPropsBoardListUI {
  data?: Pick<IQuery, "fetchBoards">;
  onClickDetailPage: (event: MouseEvent<HTMLDivElement>) => void;
  onClickCreateBoard: (event: MouseEvent<HTMLButtonElement>) => void;
}
