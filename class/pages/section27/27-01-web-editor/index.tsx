import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});
const onChangeContents = (value: string): void => {
  // 여기의 onChange에는 value가 string으로 들어옴
  // React-Quill만든 사람들이 만든 onChange이므로 event는 들어오지 않는다.
  console.log(value);
};

// useEffect(() => {
//   async function aaa(): Promise<void> {
//     // 다만 useEffect를 사용할 경우 코드가 복잡해지는 경우도 있다.
//     const { Modal } = await import("antd"); // 코드를 쪼갰다. => 코드 splitting -성능 최적화방법
//     Modal.success({ content: "등록성공!!!" });
//   }
//   void aaa();
// }, []);

const onClickSubmit = async (): Promise<void> => {
  const { Modal } = await import("antd"); // 코드를 쪼갰다. => 코드 splitting -성능 최적화방법
  Modal.success({ content: "등록성공!!!" });
};
export default function WebEditorPage(): JSX.Element {
  return (
    <form onSubmit={wrapFormAsync(onClickSubmit)}>
      작성자: <input type="text" />
      <br />
      비밀번호: <input type="password" />
      <br />
      제목: <input type="text" />
      <br />
      내용:
      {typeof window !== "undefined" && (
        <ReactQuill onChange={onChangeContents} />
      )}
      <button>등록하기</button>
    </form>
  );
}
