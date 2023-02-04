import type { MouseEvent } from "react";

export interface ILayoutHeaderProps {
  onClickMenu: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickOpenRightMenu: () => void;
  isOpen: boolean;
  onClickMain: (event: MouseEvent<HTMLDivElement>) => void;
}
