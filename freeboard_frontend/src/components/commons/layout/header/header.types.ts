import type { MouseEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";

export interface ILayoutHeaderProps {
  onClickMenu: any;
  onClickMain: (event: MouseEvent<HTMLDivElement>) => void;
  onClick: any;
  items2: any;
  current: string;
  data?: Pick<IQuery, "fetchUserLoggedIn">;
}
