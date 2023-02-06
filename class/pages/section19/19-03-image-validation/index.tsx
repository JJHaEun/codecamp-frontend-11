import { gql, useMutation } from "@apollo/client";
import type { ChangeEvent } from "react";
import { useState, useRef } from "react";
import { checkValidationFile } from "../../../src/commons/libraries/validationFile";
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
  const fileRef = useRef<HTMLInputElement>(null);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files?.[0]; // 배열로 들어오는 이유 :<input type="file" multiple/>일때 여러개 드래그 가능
    console.log(file); // 선택한 파일을 콘솔로 찍어본다

    // 보내기 전에 검증

    const isValid = checkValidationFile(file);
    if (!isValid) return; // file이 없을때. ,
    // 즉, 검증을 통과하지 못했을때는 false가 됨.
    // , true가 아닐때(false일때) return 시킴
    // ========================

    const result = await uploadFile({
      variables: {
        file,
      },
    });
    console.log(result.data?.uploadFile.url); // 스토리지로 들어간 해당 이미지 다운로드 주소 확인 //
    // 여기에 구글클라우드 주소를..
    setImgUrl(result.data?.uploadFile.url ?? ""); // 스토리지의 해당 사진주소없으면 빈문자열이라도
  };

  const onClickImage = (): void => {
    // document.getElementById("파일태그 아이디")?.click();
    fileRef.current?.click();
    // ref로 연결된것이 클릭되게
  };

  return (
    <>
      <div
        style={{ width: "50px", height: "50px", backgroundColor: "gray" }}
        onClick={onClickImage}
      >
        이미지 선택
      </div>
      <input
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        ref={fileRef}
        accept="image.jpeg,imag/png"
      />
      <img src={`https://storage.googleapis.com/${imgUrl}`} alt="" />
      {/*  스토리지의 해당 주소의 이미지를 불러옴 */}
    </>
  );
}
