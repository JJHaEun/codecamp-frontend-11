import type { DocumentData } from "firebase/firestore/lite";

export interface IFirebaseListUIProps {
  boardList: DocumentData[];
  onClickMoveCreate: () => void;
}
