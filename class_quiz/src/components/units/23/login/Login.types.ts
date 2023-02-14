import { ChangeEvent } from "react";

export interface ILoginUIProps {
  onChangeLogin: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: () => Promise<void>;
}
