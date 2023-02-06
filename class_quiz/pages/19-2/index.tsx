import { LikeOutlined } from "@ant-design/icons";
import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
import { checkValidationFile } from "../../src/commons/libraries/validationFile";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      _id
      url
    }
  }
`;
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function ImageUploadPage(): JSX.Element {
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const imgRef = useRef<HTMLInputElement>(null);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const onClickChoiceImg = (): void => {
    imgRef.current?.click();
  };
  const onChangeImage = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files?.[0];

    const isValid = checkValidationFile(file);
    if (!isValid) return;

    const result = await uploadFile({
      variables: {
        file,
      },
    });
    setImgUrl(result.data?.uploadFile.url ?? "");
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>): void => {
    setContents(event.target.value);
  };

  const onClickSubmit = async (): Promise<void> => {
    await createBoard({
      variables: {
        createBoardInput: {
          writer,
          title,
          contents,
          password,
          images: [imgUrl],
        },
      },
    });
  };

  return (
    <>
      <p>작성자</p>
      <input type="text" onChange={onChangeWriter} />
      <p>비밀번호</p>
      <input type="password" onChange={onChangePassword} />
      <p>제목</p>
      <input type="text" onChange={onChangeTitle} />
      <p>내용</p>
      <input type="text" onChange={onChangeContents} />
      <p>이미지</p>
      <input
        type="file"
        onChange={onChangeImage}
        ref={imgRef}
        style={{ display: "none" }}
        accept="image/png,imag/jpeg"
      />
      <img src={`https://storage.googleapis.com/${imgUrl}`} alt="" />
      <div>
        <LikeOutlined onClick={onClickChoiceImg} />
        <button onClick={onClickSubmit}>저장하기</button>
      </div>
    </>
  );
}
