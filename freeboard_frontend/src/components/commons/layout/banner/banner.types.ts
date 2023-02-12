import type { MouseEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";

export interface ILayoutBannerUIProps {
  onClickMove: (event: MouseEvent<HTMLElement>) => void;
  data?: Pick<IQuery, "fetchBoardsCount">;
  bestBoards?: Pick<IQuery, "fetchBoardsOfTheBest">;
  onClickMoveList: () => void;
  getRandomColor: () => string;
}
export interface IPropsStyle {
  getRandomColor?: () => string;
}
