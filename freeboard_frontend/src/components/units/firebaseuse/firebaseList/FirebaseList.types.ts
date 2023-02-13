import type { DocumentData } from "firebase/firestore/lite";
// import type { MouseEvent } from "react";

export interface IFirebaseListUIProps {
  boardList: DocumentData[];
  onClickMoveCreate: () => void;
  // onClickDetail: (event: MouseEvent<HTMLDivElement>) => void;
}
