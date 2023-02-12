import type { MenuProps } from "antd";
import type { MouseEvent } from "react";

export type MenuItem = Required<MenuProps>["items"][number];

export interface ILayoutHeaderProps {
  onClickMenu: any;
  items: any;
  onClickMain: (event: MouseEvent<HTMLDivElement>) => void;
  onClick: any;
  items2: any;
  current: string;
}
