import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";
import ImagesPage from "./images";
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;
const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

interface IFormRegister {
  writer: string;
  title: string;
  contents: string;
  password: string;
  images: string[];
}

export default function ImageUploadAndSubmitPage(): JSX.Element {
  const [imageUrls, setImgUrls] = useState(["", "", ""]);
  const [files, setFiles] = useState<File[]>([]);
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const { register, handleSubmit } = useForm<IFormRegister>();

  const onChangeFile =
    (i: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const file = event?.target.files?.[0];
      if (file === undefined) return;

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (event) => {
        if (typeof event.target?.result === "string") {
          const tempUrls = [...imageUrls];
          tempUrls[i] = event.target.result;
          setImgUrls(tempUrls);

          const tempFiles = [...files];
          tempFiles[i] = file;
          setFiles(tempFiles);
        }
      };
    };

  const onClickSubmit = async (data: IFormRegister): Promise<void> => {
    const results = await Promise.all(
      files.map(async (el) => await uploadFile({ variables: { file: el } }))
    );
    const finalResult = results.map((el) => el.data?.uploadFile.url);

    await createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          contents: data.contents,
          password: data.password,
          title: data.title,
          images: finalResult,
        },
      },
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        작성자: <input type="text" {...register("writer")} />
        비밀번호: <input type="password" {...register("password")} />
        제목: <input type="text" {...register("title")} />
        내용: <input type="text" {...register("contents")} />
        <ImagesPage onChangeFile={onChangeFile} imageUrls={imageUrls} />
        <button>등록하기</button>
      </form>
    </>
  );
}
