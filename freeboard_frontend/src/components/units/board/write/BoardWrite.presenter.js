import * as S from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <S.AllBox>
      <S.MainTitle>게시물 등록</S.MainTitle>
      <S.WritePw>
        <S.WritePwArr>
          <S.Label>작성자</S.Label>
          <S.ErrMassages>{props.writerErr}</S.ErrMassages>
          <S.WritePwInput
            type="text"
            placeholder="이름을 적어주세요"
            onChange={props.onChangeWriter}
          />
        </S.WritePwArr>
        <S.WritePwArr>
          <S.Label>비밀번호</S.Label>
          <S.ErrMassages>{props.passwordErr}</S.ErrMassages>
          <S.WritePwInput
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={props.onChangePassword}
          />
        </S.WritePwArr>
      </S.WritePw>
      <S.TitleArr>
        <S.Label>제목</S.Label>
        <S.ErrMassages>{props.titleErr}</S.ErrMassages>
        <S.LongInput
          type="text"
          placeholder="제목을 작성해주세요"
          onChange={props.onChangeTitle}
        />
      </S.TitleArr>
      <S.ContentsArr>
        <S.Label>내용</S.Label>
        <S.ErrMassagesContents>{props.contentsErr}</S.ErrMassagesContents>
        <S.ContentArea
          placeholder="내용을 작성해주세요"
          onChange={props.onChangeContent}
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
        <S.LongInput
          type="text"
          placeholder="링크를 복사해주세요."
          onChange={props.onChangeYoutube}
        />
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
      <S.Submit onClick={props.onClickSubmit} isActive={props.isActive}>
        등록하기
      </S.Submit>
    </S.AllBox>
  );
}
