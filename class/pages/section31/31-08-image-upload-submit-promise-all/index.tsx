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

export default function ImageUploadPage(): JSX.Element {
  const [imgUrls, setImgUrls] = useState(["", "", ""]); // 이미지 미리보기 주소
  const [files, setFiles] = useState<File[]>([]); // file은 File타입이야 // 업로드 파일시에 사용
  const [나의함수] = useMutation(나의그래프큐엘세팅);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onClickSubmit = async (): Promise<void> => {
    // 1. 업로드 파일먼저하기(uploadFile)

    // 1-1) 여러개 보내는데 안좋은 예제. await를 매번 기다림 => for문 사용해도 마찬가지
    // const resultFile0 = await uploadFile({ variables: { file: files[0] } }); // 차례로 기다리면서 실행됨
    // const resultFile1 = await uploadFile({ variables: { file: files[1] } }); // 스토리지로 이미지를 저장함
    // const resultFile2 = await uploadFile({ variables: { file: files[2] } }); // 스토리지로 이미지를 저장함

    // const url0 = resultFile0.data?.uploadFile.url; // 스토리지에 저장되어 해당 url로 변경해 넣어줌
    // const url1 = resultFile1.data?.uploadFile.url; // 스토리지에 저장되어 해당 url로 변경해 넣어줌
    // const url2 = resultFile2.data?.uploadFile.url; // 스토리지에 저장되어 해당 url로 변경해 넣어줌
    // const resultUrls = [url0, url1, url2];

    // 1-2) 좋은예제 -Promise.all 사용 한방에 다보내고 기다림
    // const results = await Promise.all([
    // uploadFile({ variables: { file: files[0] } }),
    // uploadFile({ variables: { file: files[0] } }),
    // uploadFile({ variables: { file: files[0] } }),// 이부분 리펙토링하기. 이 배열도 map으로 한줄로 줄여보자/
    // ]);
    // console.log(results); // [resultFile0,resultFile1,resultFile2] => 이 안에서 url뽑ㅇ아야함. map사용해 돌리기
    // const resultUrls = results.map((el) => el.data?.uploadFile.url); // [url0,url1,url2]

    // 1-3) 좋은예제 -Promise.all 사용 - 1-2)를 리펙토링하는방법

    // const files = [File0,File1,File2]
    // files.map((el)=>uploadFile({variables:{file:el}})) // 배열이 map을 통해 돌기에 한번씩 실행됨. 각각의 자리에 return 되어 들어감.(배열에 map이면 결과도배얄)
    const results = await Promise.all(
      files.map(async (el) => await uploadFile({ variables: { file: el } })) // 배열이 map을 통해 돌기에 한번씩 실행됨. 각각의 자리에 return 되어 들어감.(배열에 map이면 결과도배얄)
      // map이 돌아간뒤에 async await가 작동함
    );
    console.log(results); // [resultFile0,resultFile1,resultFile2] => 이 안에서 url뽑ㅇ아야함. map사용해 돌리기
    const resultUrls = results.map((el) => el.data?.uploadFile.url); // [url0,url1,url2]

    // 2. createBoard
    const result = await 나의함수({
      variables: {
        createBoardInput: {
          writer: "철수",
          title: "제목",
          contents: "내용",
          password: "12",
          images: resultUrls,
        },
      },
    }); // 함수 실행시에 변수를 전달해줌

    console.log(result);
  };
  const onChangeFile =
    (index: number) =>
    async (event?: ChangeEvent<HTMLInputElement>): Promise<void> => {
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
          const tempUrls = [...imgUrls]; // 원본을 복사하여 이전것들 가져옴
          tempUrls[index] = event.target.result; // 복사뵨의 각 인덱스에는 지금 선택한 결과가 들어옴.
          setImgUrls(tempUrls); // 얘는 미리보기용

          const tempFiles = [...files];
          tempFiles[index] = file;
          setFiles(tempFiles); // 이 file을 state에 담음
        }
      };
    };
  // 이제 이 파일을 업로드를 하면된다.

  return (
    <>
      <input type="file" onChange={onChangeFile(0)} />
      <input type="file" onChange={onChangeFile(1)} />
      <input type="file" onChange={onChangeFile(2)} />
      <img src={imgUrls[0]} />
      <img src={imgUrls[1]} />
      <img src={imgUrls[2]} />
      <button onClick={onClickSubmit}>등록하기</button>
      {/* <img src={`https://storage.googleapis.com/${imgUrl}`} /> 미리보기가 스토리지로 가서 보여주는 부분  */}
      {/*  스토리지의 해당 주소의 이미지를 불러옴 */}
    </>
  );
}
