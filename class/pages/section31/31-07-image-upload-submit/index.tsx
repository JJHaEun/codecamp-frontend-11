/* eslint-disable @typescript-eslint/no-misused-promises */
import { gql, useMutation } from "@apollo/client";
import type { ChangeEvent } from "react";
import { useState } from "react";
import type {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";

const 나의그래프큐엘세팅 = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    # 변수들의 타입을 적어줌
    createBoard(createBoardInput: $createBoardInput) {
      # 변수를 $writer식으로 넣어주고
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

export default function ImageUploadPage(): JSX.Element {
  const [imgUrl, setImgUrl] = useState("");
  const [file, setFile] = useState<File>(); // file은 File타입이야 // 업로드 파일시에 사용
  const [나의함수] = useMutation(나의그래프큐엘세팅);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  // const wrapFileAsync = (asyncFunc: (event) => Promise<void>) => () => {
  //   // 이벤트가 이리 들어와 여기에서 file이 들어가 event가 실행됨.
  //   void asyncFunc(event);
  // };
  const onClickSubmit = async (): Promise<void> => {
    // 1. 업로드 파일먼저하기(uploadFile)
    const resultFile = await uploadFile({ variables: { file } }); // 스토리지로 이미지를 저장함
    const url = resultFile.data?.uploadFile.url; // 스토리지에 저장되어 해당 url로 변경해 넣어줌

    // 2. createBoard
    const result = await 나의함수({
      variables: {
        createBoardInput: {
          writer: "철수",
          title: "제목",
          contents: "내용",
          password: "12",
          images: [url],
        },
      },
    }); // 함수 실행시에 변수를 전달해줌

    console.log(result);
  };
  const onChangeFile = async (
    event?: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event?.target.files?.[0]; // 배열로 들어오는 이유 :<input type="file" multiple/>일때 여러개 드래그 가능

    if (file === undefined) return;

    console.log(file); // 선택한 파일을 콘솔로 찍어본다 // 이 파일을 다시 state에 저장한다.

    // 1. 임시 URL생성 => 가짜 URL 생성 -> 내 브라우저에서만 접속가능 -> 안되는 브라우저도 있음.
    // const result = URL.createObjectURL(file);
    // console.log(result);

    // ======================>>..>.>>>>>>>>>>>>>================

    // 2. 임시 URL생성 => 진짜 URL 생성 -> 다른브라우저에서도 접근가능 (사진 자체를 텍스트 형태로 바꾼것이기에) => 주로사용.

    const fileReader = new FileReader(); // 파일을 읽어줘
    fileReader.readAsDataURL(file); // 이것을 읽어줘 이 파일을 url로
    fileReader.onload = (event) => {
      // 다 로드가 되면(로드되어 들어온 event의 target)// 게시판에서 event.target.id를 쓰면 eslint가 잡혔던이유 : event.target은 태그만을 가르키지 않으므로
      console.log(event.target?.result);
      if (typeof event.target?.result === "string") {
        setImgUrl(event.target.result);
        setFile(file); // 이 file을 state에 담음
      }
    };
  };
  // 이제 이 파일을 업로드를 하면된다.

  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <img src={imgUrl} />
      <button onClick={onClickSubmit}>등록하기</button>
      {/* <img src={`https://storage.googleapis.com/${imgUrl}`} /> 미리보기가 스토리지로 가서 보여주는 부분  */}
      {/*  스토리지의 해당 주소의 이미지를 불러옴 */}
    </>
  );
}
