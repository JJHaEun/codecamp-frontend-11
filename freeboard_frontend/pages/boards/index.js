import * as S from "../../styles/boardsWrite";

export default function BoardWriteUI() {
  return (
    <S.AllBox>
      <div>
        <h1>게시물 등록</h1>
      </div>
      <S.WritePw>
        <S.WritePwArr>
          <span>작성자</span>
          <S.WritePwInput type="text" placeholder="이름을 적어주세요" />
        </S.WritePwArr>
        <S.WritePwArr>
          <span>비밀번호</span>
          <S.WritePwInput type="text" placeholder="비밀번호를 입력해주세요" />
        </S.WritePwArr>
      </S.WritePw>

      <div>
        <div>
          <div>제목</div>
          <S.LongInput type="text" placeholder="제목을 입력해주세요" />
        </div>
      </div>
      <div>
        <div>내용</div>
        <S.ContentArea placeholder="내용을 입력해주세요"></S.ContentArea>
      </div>
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
      <S.Submit>등록하기</S.Submit>
    </S.AllBox>
  );
}
