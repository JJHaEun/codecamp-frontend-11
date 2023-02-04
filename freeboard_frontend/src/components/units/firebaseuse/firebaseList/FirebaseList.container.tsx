import type { DocumentData } from "firebase/firestore/lite";
import { collection, getDocs } from "firebase/firestore/lite";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "../../../commons/libraries/firebase";
import FirebaseListUI from "./FirebaseList.presenter";

export default function FirebaseList(): JSX.Element {
  const [boardList, setBoardList] = useState<DocumentData[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchBoards = async (): Promise<void> => {
      const board = collection(db, "board");
      const result = await getDocs(board);

      setBoardList(result.docs.map((el) => el.data()));
      //   console.log(
      //     ":",
      //     result.docs.map((el) => el.data())
      //   );
      console.log(board.id);
    };
    void fetchBoards();
  }, []);
  //   console.log(",a,", boardList);

  const onClickMoveCreate = (): void => {
    void router.push(`/firebaseuse/new`);
  };
  return (
    <>
      <FirebaseListUI
        boardList={boardList}
        onClickMoveCreate={onClickMoveCreate}
      />
    </>
  );
}
