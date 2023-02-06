import {
  collection,
  addDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore/lite";
import { firebaseApp } from "../../../src/commons/libraries/firebase";

export default function FirebasePage(): JSX.Element {
  const onClickSubmit = (): void => {
    const board = collection(getFirestore(firebaseApp), "board"); // 연결후에 collection(봉투에서)에서 가져옴
    void addDoc(board, {
      writer: "철수",
      title: "안녕",
      contents: "반갑",
    });
    // 문서 추가. 어디다가 , 무엇을 넣을지
  };

  const onClickFetch = async (): Promise<void> => {
    const board = collection(getFirestore(firebaseApp), "board"); // 연결후에 collection(봉투에서)에서 가져옴
    const result = await getDocs(board); // 문서 전부 가져와줘
    const datas = result.docs.map((el) => el.data());
    console.log(datas);
  };

  return (
    <>
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>조회하기</button>
    </>
  );
}
