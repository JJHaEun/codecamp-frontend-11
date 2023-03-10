import type { MouseEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";

export interface IPropsBoardDetailUI {
  data?: Pick<IQuery, "fetchBoard">;
  onClickLike: () => void;
  onClickDisLike: () => void;
  onClickMoveToList: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveToEdit: () => void;
}
