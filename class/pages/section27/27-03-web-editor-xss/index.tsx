import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import type {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../src/commons/types/generated/types";

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
const 나의그래프큐엘세팅 = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    # 변수들의 타입을 적어줌
    createBoard(createBoardInput: $createBoardInput) {
      # 변수를 $writer식으로 넣어주고
      _id
      writer
      title
      contents
    }
  }
`;

export default function WebEditorPage(): JSX.Element {
  const [나의함수] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(나의그래프큐엘세팅);
  const router = useRouter();
  const { register, setValue, trigger, handleSubmit } = useForm({
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

  const onClickSubmit = async (data: any): Promise<void> => {
    const result = await 나의함수({
      variables: {
        createBoardInput: {
          writer: data.writer,
          title: data.title,
          contents: data.contents, /// setValue를 통해 강제로 넣어주었기에 data에 contents도 들어있음.
          password: data.password,
        },
      },
    });
    const boardId = result.data?.createBoard._id;
    void router.push(`/section27/27-03-web-editor-xss-detail/${boardId}`);
    const { Modal } = await import("antd"); // 코드를 쪼갰다. => 코드 splitting -성능 최적화방법
    Modal.success({ content: "등록성공!!!" });
  };

  return (
    <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용:
      {typeof window !== "undefined" && (
        <ReactQuill onChange={onChangeContents} />
      )}
      <button>등록하기</button>
    </form>
  );
}
