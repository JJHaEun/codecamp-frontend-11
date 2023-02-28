// import { gql, useMutation } from "@apollo/client";
import type { ChangeEvent } from "react";
import { useState } from "react";
// import type {
//   IMutation,
//   IMutationUploadFileArgs,
// } from "../../../src/commons/types/generated/types";

// const UPLOAD_FILE = gql`
//   mutation uploadFile($file: Upload!) {
//     uploadFile(file: $file) {
//       url
//     }
//   }
// `;

export default function ImageUploadPage(): JSX.Element {
  const [imgUrl, setImgUrl] = useState("");

  //   const [uploadFile] = useMutation<
  //     Pick<IMutation, "uploadFile">,
  //     IMutationUploadFileArgs
  //   >(UPLOAD_FILE);
  const wrapFileAsync = (asyncFunc: (event) => Promise<void>) => () => {
    // 이벤트가 이리 들어와 여기에서 file이 들어가 event가 실행됨.
    void asyncFunc(event);
  };
  const onChangeFile = async (
    event?: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event?.target.files?.[0]; // 배열로 들어오는 이유 :<input type="file" multiple/>일때 여러개 드래그 가능

    if (file === undefined) return;

    console.log(file); // 선택한 파일을 콘솔로 찍어본다
    // const result = await uploadFile({variables: {file} });
    // console.log(result.data?.uploadFile.url); // 스토리지로 들어간 해당 이미지 다운로드 주소 확인 //
    // // 여기에 구글클라우드 주소를..
    // setImgUrl(result.data?.uploadFile.url ?? ""); // 스토리지의 해당 사진주소없으면 빈문자열이라도

    // 1. 임시 URL생성 => 가짜 URL 생성 -> 내 브라우저에서만 접속가능 -> 안되는 브라우저도 있음.
    // const result = URL.createObjectURL(file);
    // console.log(result);

    // ======================>>..>.>>>>>>>>>>>>>================

    // 2. 임시 URL생성 => 진짜 URL 생성 -> 다른브라우저에서도 접근가능 (사진 자체를 텍스트 형태로 바꾼것이기에) => 주로사용.

    const fileReader = new FileReader(); // 파일을 읽어줘
    fileReader.readAsDataURL(file); // 이것을 읽어줘
    fileReader.onload = (event) => {
      // 다 로드가 되면(로드되어 들어온 event의 target)// 게시판에서 event.target.id를 쓰면 eslint가 잡혔던이유 : event.target은 태그만을 가르키지 않으므로
      console.log(event.target?.result);
      if (typeof event.target?.result === "string") {
        setImgUrl(event.target.result);
      }
    };
  };
  // 이제 이 파일을 업로드를 하면된다.
  return (
    <>
      <input type="file" onChange={wrapFileAsync(onChangeFile)} />
      <img src={imgUrl} />
      {/* <img src={`https://storage.googleapis.com/${imgUrl}`} /> 미리보기가 스토리지로 가서 보여주는 부분  */}
      {/*  스토리지의 해당 주소의 이미지를 불러옴 */}
    </>
  );
}
