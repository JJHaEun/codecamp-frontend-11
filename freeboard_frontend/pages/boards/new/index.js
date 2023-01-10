import { useState } from "react";
import * as S from "../../../styles/boardsWrite";

export default function BoardWriteUI() {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [errMessage, setErrMessage] = useState("");

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContent = (event) => {
    setContent(event.target.value);
  };
  const onClickSubmit = () => {
    if (!writer || !password || !title || !content) {
      setErrMessage("필수입력사항입니다");
    }
  };

  return (
    <S.AllBox>
      <h1>게시물 등록</h1>
      <S.WritePw>
        <S.WritePwArr>
          <span>작성자</span>
          <S.ErrMassages>{errMessage}</S.ErrMassages>
          <S.WritePwInput
            type="text"
            placeholder="이름을 적어주세요"
            onChange={onChangeWriter}
          />
        </S.WritePwArr>
        <S.WritePwArr>
          <span>비밀번호</span>
          <S.ErrMassages>{errMessage}</S.ErrMassages>
          <S.WritePwInput
            type="text"
            placeholder="비밀번호를 입력해주세요"
            onChange={onChangePassword}
          />
        </S.WritePwArr>
      </S.WritePw>

      <div>
        <S.TitleArr>
          <div>제목</div> <S.ErrMassages>{errMessage}</S.ErrMassages>
          <S.LongInput
            type="text"
            placeholder="제목을 입력해주세요"
            onChange={onChangeTitle}
          />
        </S.TitleArr>
      </div>
      <S.ContentsArr>
        <div>내용</div>
        <S.ErrMassages>{errMessage}</S.ErrMassages>
        <S.ContentArea
          placeholder="내용을 입력해주세요"
          onChange={onChangeContent}
        ></S.ContentArea>
      </S.ContentsArr>
      <S.AddressArr>
        <div>주소</div>
        <S.AddressSearch>
          <S.Address0 type="text" placeholder="07250" />
          <S.SearchButton>우편번호 검색</S.SearchButton>
        </S.AddressSearch>

        <S.LongInputAddress type="text" />
        <S.LongInputAddress type="text" />
      </S.AddressArr>
      <S.Lincked>
        <div>유튜브</div>
        <S.LongInput type="text" placeholder="링크를 복사해주세요." />
      </S.Lincked>
      <S.UploadAndSetting>
        <div>
          <div>사진첨부</div>
          <S.UploadBox>
            <S.UploadDiv>+</S.UploadDiv>
            <S.UploadDiv>+</S.UploadDiv>
            <S.UploadDiv>+</S.UploadDiv>
          </S.UploadBox>
        </div>
        <S.Choice>
          <div>메인설정</div>
          <S.ChoiceMain>
            <div>
              <input type="radio" checked />
              <label>유튜브</label>
            </div>
            <div>
              <input type="radio" />
              <label>사진</label>
            </div>
          </S.ChoiceMain>
        </S.Choice>
      </S.UploadAndSetting>
      <S.Submit onClick={onClickSubmit}>등록하기</S.Submit>
    </S.AllBox>
  );
}
