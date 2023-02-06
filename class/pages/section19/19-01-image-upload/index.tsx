import { gql, useMutation } from "@apollo/client";
import type { ChangeEvent } from "react";
import { useState } from "react";
import type {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage(): JSX.Element {
  const [imgUrl, setImgUrl] = useState("");

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files?.[0]; // 배열로 들어오는 이유 :<input type="file" multiple/>일때 여러개 드래그 가능
    console.log(file); // 선택한 파일을 콘솔로 찍어본다
    const result = await uploadFile({
      variables: {
        file,
      },
    });
    console.log(result.data?.uploadFile.url); // 스토리지로 들어간 해당 이미지 다운로드 주소 확인 //
    // 여기에 구글클라우드 주소를..
    setImgUrl(result.data?.uploadFile.url ?? ""); // 스토리지의 해당 사진주소없으면 빈문자열이라도
  };

  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <img src={`https://storage.googleapis.com/${imgUrl}`} />
      {/*  스토리지의 해당 주소의 이미지를 불러옴 */}
    </>
  );
}
