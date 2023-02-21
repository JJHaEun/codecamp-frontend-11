import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import { useForm } from "react-hook-form";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

// useEffect(() => {
//   async function aaa(): Promise<void> {
//     // 다만 useEffect를 사용할 경우 코드가 복잡해지는 경우도 있다.
//     const { Modal } = await import("antd"); // 코드를 쪼갰다. => 코드 splitting -성능 최적화방법
//     Modal.success({ content: "등록성공!!!" });
//   }
//   void aaa();
// }, []);

export default function WebEditorPage(): JSX.Element {
  const { register, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const onChangeContents = (value: string): void => {
    // 여기의 onChange에는 value가 string으로 들어옴
    // React-Quill만든 사람들이 만든 onChange이므로 event는 들어오지 않는다.
    console.log(value);
    // 이   value를 리엑트 훅폼에 강제로 넣기
    // setValue는 register을 등록하지 않고 강제로 값을 넣어주는기능
    setValue("contents", value === "<p><br></p>" ? "" : value); // contents에 value를 넣음.(setValue를 통해 강제로)값은 저장이되나, 에러검증안됨.따라서
    // 입력하고 완전히 비웠을때 <p><br></p>가 나온다 => 얘를 빈값으로 바꿔야한다.
    // 이 경우에는 완전히 빈값으로 만들고 아니면 value를 넣는다.(콘솔창에는 변화없음)

    // trigger사용
    void trigger("contents"); // onChange되었으니 에러검증등 해달라고 react-hook-form에 알려주는 기능
  };

  const onClickSubmit = async (): Promise<void> => {
    const { Modal } = await import("antd"); // 코드를 쪼갰다. => 코드 splitting -성능 최적화방법
    Modal.success({ content: "등록성공!!!" });
  };

  return (
    <form onSubmit={wrapFormAsync(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
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
