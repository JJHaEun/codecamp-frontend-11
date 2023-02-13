import type { MenuProps } from "antd";
import type { ItemType } from "antd/es/menu/hooks/useItems";
// import type { MouseEvent } from "react";

export type MenuItem = Required<MenuProps>["items"][number];

export interface ILayoutSidebarUIProps {
  // onClickMove: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickMove?: any;
  items?: ItemType[];
}
