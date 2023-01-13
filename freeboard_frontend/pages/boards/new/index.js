import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import * as S from "../../../styles/boardsWrite";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function BoardWriteUI() {
  const [createBoard] = useMutation(CREATE_BOARD);
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [writerErr, setWriterErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [titleErr, setTitleErr] = useState("");
  const [contentsErr, setContentsErr] = useState("");

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (writer !== "") {
      setWriterErr("");
    }
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (password !== "") {
      setPasswordErr("");
    }
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (title !== "") {
      setTitleErr("");
    }
  };
  const onChangeContent = (event) => {
    setContents(event.target.value);
    if (contents !== "") {
      setContentsErr("");
    }
  };
  const onClickSubmit = async () => {
    if (!writer) {
      setWriterErr("작성자를 입력해주세요.");
    }
    if (!password) {
      setPasswordErr("비밀번호를 입력해주세요.");
    }
    if (!title) {
      setTitleErr("제목을 입력해주세요.");
    }
    if (!contents) {
      setContentsErr("내용을 입력해주세요.");
    }
    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
            },
          },
        });
        console.log(result);
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <S.AllBox>
      <h1>게시물 등록</h1>
      <S.WritePw>
        <S.WritePwArr>
          <S.Label>작성자</S.Label>
          <S.ErrMassages>{writerErr}</S.ErrMassages>
          <S.WritePwInput
            type="text"
            placeholder="이름을 적어주세요"
            onChange={onChangeWriter}
          />
        </S.WritePwArr>
        <S.WritePwArr>
          <S.Label>비밀번호</S.Label>
          <S.ErrMassages>{passwordErr}</S.ErrMassages>
          <S.WritePwInput
            type="text"
            placeholder="비밀번호를 입력해주세요"
            onChange={onChangePassword}
          />
        </S.WritePwArr>
      </S.WritePw>
      <div>
        <S.TitleArr>
          <S.Label>제목</S.Label>
          <S.ErrMassages>{titleErr}</S.ErrMassages>
          <S.LongInput
            type="text"
            placeholder="제목을 작성해주세요"
            onChange={onChangeTitle}
          />
        </S.TitleArr>
      </div>
      <S.ContentsArr>
        <S.Label>내용</S.Label>
        <S.ErrMassagesContents>{contentsErr}</S.ErrMassagesContents>
        <S.ContentArea
          placeholder="내용을 작성해주세요"
          onChange={onChangeContent}
        ></S.ContentArea>
      </S.ContentsArr>
      <S.AddressArr>
        <S.Label>주소</S.Label>
        <S.AddressSearch>
          <S.Address0 type="text" placeholder="07250" readOnly />
          <S.SearchButton>우편번호 검색</S.SearchButton>
        </S.AddressSearch>

        <S.LongInputAddress type="text" />
        <S.LongInputAddress type="text" />
      </S.AddressArr>
      <S.Lincked>
        <S.Label>유튜브</S.Label>
        <S.LongInput type="text" placeholder="링크를 복사해주세요." />
      </S.Lincked>
      <S.UploadAndSetting>
        <div>
          <S.Label>사진첨부</S.Label>
          <S.UploadBox>
            <S.UploadDiv>
              <S.UploadBoxContent>
                <div>+</div>
                <div>Upload</div>
              </S.UploadBoxContent>
            </S.UploadDiv>
            <S.UploadDiv>
              <S.UploadBoxContent>
                <div>+</div>
                <div>Upload</div>
              </S.UploadBoxContent>
            </S.UploadDiv>
            <S.UploadDiv>
              <S.UploadBoxContent>
                <div>+</div>
                <div>Upload</div>
              </S.UploadBoxContent>
            </S.UploadDiv>
          </S.UploadBox>
        </div>
        <S.Choice>
          <S.Label>메인설정</S.Label>
          <S.ChoiceMain>
            <S.ChoiceArr>
              <S.Radio type="radio" checked name="choice" value="youtube" />
              <S.Label2>유튜브</S.Label2>
            </S.ChoiceArr>
            <S.ChoiceArr>
              <S.Radio type="radio" name="choice" value="photo" />
              <S.Label2>사진</S.Label2>
            </S.ChoiceArr>
          </S.ChoiceMain>
        </S.Choice>
      </S.UploadAndSetting>
      <S.Submit onClick={onClickSubmit}>등록하기</S.Submit>
    </S.AllBox>
  );
}
