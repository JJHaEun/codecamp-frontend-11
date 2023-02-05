import type { MouseEvent } from "react";

export interface ILayoutSidebarUIProps {
  onClickMove: (event: MouseEvent<HTMLSpanElement>) => void;
}
