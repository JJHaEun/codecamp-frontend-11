import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { schema } from "../../../src/commons/libraries/yupValidation01";
import type {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../src/commons/types/generated/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import Inputs01 from "../../../src/components/commons/inputs/01/inputs01";
import Buttons01 from "../../../src/components/commons/buttons/02/buttons01";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  password: string;
}
export default function YupPage(): JSX.Element {
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const onClickCreate = async (data: IFormData): Promise<void> => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            ...data,
          },
        },
      });
      console.log("id:", result.data?.createBoard._id);
      Modal.success({ content: "등록성공!!" });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <form onSubmit={wrapFormAsync(handleSubmit(onClickCreate))}>
      <Inputs01
        type="text"
        placeholder="작성자"
        register={register("writer")}
      />
      <div style={{ color: "red", fontSize: "10px" }}>
        {formState.errors.writer?.message}
      </div>
      <Inputs01
        type="password"
        placeholder="비밀번호"
        register={register("password")}
      />
      <div style={{ color: "red", fontSize: "10px" }}>
        {formState.errors.password?.message}
      </div>
      <Inputs01 type="text" placeholder="제목" register={register("title")} />
      <div style={{ color: "red", fontSize: "10px" }}>
        {formState.errors.title?.message}
      </div>
      <Inputs01
        type="text"
        placeholder="내용"
        register={register("contents")}
      />
      <div style={{ color: "red", fontSize: "10px" }}>
        {formState.errors.contents?.message}
      </div>
      <Buttons01 title="게시물 등록하기" />
    </form>
  );
}
