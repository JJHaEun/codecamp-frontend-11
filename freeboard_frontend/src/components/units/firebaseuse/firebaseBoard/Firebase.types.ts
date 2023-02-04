import type { ChangeEvent } from "react";

export interface IFirebaseWriteUIProps {
  onChangeContent: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
}
