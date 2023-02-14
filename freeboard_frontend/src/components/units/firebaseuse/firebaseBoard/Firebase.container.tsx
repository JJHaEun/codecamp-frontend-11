import { addDoc, collection } from "firebase/firestore/lite";
import { useState } from "react";
// import type { ChangeEvent } from "react";
import { db } from "../../../commons/libraries/firebase";
import FirebaseWriteUI from "./Firebase.presenter";
import { useRouter } from "next/router";

export default function FirebaseWrite(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [boardId, setBoardId] = useState("");
  const router = useRouter();
  const [boardContent, setBoardContent] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const onChangeContent =
    (content: string) =>
    (event: any): void => {
      setBoardContent((prev) => ({
        ...prev,
        [content]: event.target.value,
      }));
    };

  const onClickSubmit = async (): Promise<void> => {
    // const board = collection(db, "board");
    // void addDoc(board, {
    //   ...boardContent,
    // });
    const board = await addDoc(collection(db, "board"), {
      ...boardContent,
    });
    console.log(board, ":", board.id);
    setBoardId(board.id);
    void router.push(`/firebaseuse`);
  };
  return (
    <>
      <FirebaseWriteUI
        onChangeContent={onChangeContent}
        onClickSubmit={onClickSubmit}
        boardContent={boardContent}
      />
    </>
  );
}
