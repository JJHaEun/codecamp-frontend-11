import { gql, useMutation } from "@apollo/client";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";
import { wrapFormAsync } from "../../../../src/commons/libraries/asyncFunc";

import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../../src/commons/types/generated/types";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  password: string;
}
export default function EditorFormPage(): JSX.Element {
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const router = useRouter();
  const { register, setValue, trigger, handleSubmit } = useForm<IFormData>();

  const onChangeContents = (value: string): void => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    void trigger("contents");
  };
  const onClickSubmit = async (data: IFormData): Promise<void> => {
    const result = await createBoard({
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
    if (typeof boardId !== "string") {
      const { Modal } = await import("antd");
      Modal.info({ content: "다시시도해주세요" });
      return;
    }
    void router.push(`/27/editor/detail/${boardId}`);
    const { Modal } = await import("antd"); // 코드를 쪼갰다. => 코드 splitting -성능 최적화방법
    Modal.success({ content: "등록성공!!!" });
  };

  return (
    <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
      작성자:
      <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      {typeof window !== "undefined" && (
        <ReactQuill onChange={onChangeContents} />
      )}
      <button>등록하기</button>
    </form>
  );
}
