import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../src/commons/types/generated/types";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

interface IFormData {
  createBoardInput: {
    writer: string;
    title: string;
    contents: string;
    password: string;
  };
}
export default function ReactHookFormPage(): JSX.Element {
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();

  const onClickCreate = async (data: IFormData): Promise<void> => {
    try {
      await createBoard({
        variables: {
          ...data,
        },
      });
      Modal.success({ content: "등록성공!!" });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <form onSubmit={wrapFormAsync(handleSubmit(onClickCreate))}>
      <input
        type="text"
        placeholder="작성자"
        {...register("createBoardInput.writer", { required: true })}
      />
      <div style={{ color: "red", fontSize: "10px" }}>
        {Boolean(errors?.createBoardInput?.writer) && "작성자를 입력해주세요"}
      </div>
      <input
        type="password"
        placeholder="비밀번호"
        {...register("createBoardInput.password", { required: true })}
      />
      <div style={{ color: "red", fontSize: "10px" }}>
        {Boolean(errors?.createBoardInput?.password) &&
          "비밀번호를 입력해주세요"}
      </div>
      <input
        type="text"
        placeholder="제목"
        {...register("createBoardInput.title", { required: true })}
      />
      <div style={{ color: "red", fontSize: "10px" }}>
        {Boolean(errors?.createBoardInput?.title) && "제목을 입력해주세요"}
      </div>
      <input
        type="text"
        placeholder="내용"
        {...register("createBoardInput.contents", { required: true })}
      />
      <div style={{ color: "red", fontSize: "10px" }}>
        {Boolean(errors?.createBoardInput?.contents) && "내용을 입력해주세요"}
      </div>
      <button>게시물 등록하기</button>
    </form>
  );
}
