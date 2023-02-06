import { gql, useMutation } from "@apollo/client";
import type { ChangeEvent } from "react";
import { useState, useRef } from "react";
import { checkValidationFile } from "../../../src/commons/libraries/validationFile";
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

  // //////////////////////////////////////////////

  const [나의함수] = useMutation(나의그래프큐엘세팅);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>): void => {
    setContents(event.target.value); // input에 입력한 값(발생한 이벤트를)을 state에 저장.
  };

  const onClickSubmit = async (): Promise<void> => {
    // const result = 나의함수();
    const result = await 나의함수({
      // axios.get 부분과 나의함수() 둘다 같음. 둘다 실행하는것. axios의 경우 get부분이 실행.
      // 나의함수()가 실행되면  useMutation의 뒤에 들어있는 부분이 실행됨.
      variables: {
        createBoardInput: {
          // $ === variables `variables`애가 `$`역할을 함.
          writer,
          title,
          contents,
          password: "12",
          images: [imgUrl], // 이미지 주소를 넣음. 현재 imgUrl이라는 state에 들어있음
        },
      },
      // $: {
      //   // $ === variables `variables`애가 `$`역할을 함.
      //   writer: writer,
      //   title: title,
      //   contents: contents,
      // },
    }); // 함수 실행시에 변수를 전달해줌

    console.log(result);
  };

  return (
    <>
      작성자: <input type="text" onChange={onChangeWriter} />
      제목: <input type="text" onChange={onChangeTitle} />
      내용: <input type="text" onChange={onChangeContents} />
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
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
