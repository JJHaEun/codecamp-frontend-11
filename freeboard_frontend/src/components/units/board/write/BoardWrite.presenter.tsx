import DaumPostcodeEmbed from "react-daum-postcode";
import UploadImagesBoard from "../../../commons/upload/uploadImgBoard/Upload.container";
import * as S from "./BoardWrite.styles";
import type { IBoardWriteUI } from "./BoardWrite.types";
import { v4 as uuidv4 } from "uuid";

export default function BoardWriteUI(props: IBoardWriteUI): JSX.Element {
  return (
    <S.AllBox>
      {props.contextHolder}
      {props.isOpen && (
        <S.Addressmodal open={true} onCancel={props.ToggleModal}>
          <DaumPostcodeEmbed onComplete={props.onChangeAddress} />
        </S.Addressmodal>
      )}
      <S.MainTitle>게시물 {props.isEdit ? "수정" : "등록"}</S.MainTitle>
      <S.WritePw>
        <S.WritePwArr>
          <S.Label>작성자</S.Label>
          <S.ErrMassages>{props.writerErr}</S.ErrMassages>
          <S.WritePwInput
            role="writer-input"
            type="text"
            placeholder="이름을 적어주세요"
            onChange={props.onChangeWriter}
            defaultValue={props.data?.fetchBoard.writer ?? ""}
            readOnly={Boolean(props.data?.fetchBoard.writer)}
          />
        </S.WritePwArr>
        <S.WritePwArr>
          <S.Label>비밀번호</S.Label>
          <S.ErrMassages>{props.passwordErr}</S.ErrMassages>
          <S.WritePwInput
            type="password"
            role="password-input"
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
          role="title-input"
          placeholder="제목을 작성해주세요"
          onChange={props.onChangeTitle}
          defaultValue={props.data?.fetchBoard.title}
        />
      </S.TitleArr>
      <S.ContentsArr>
        <S.Label>내용</S.Label>
        <S.ErrMassagesContents>{props.contentsErr}</S.ErrMassagesContents>
        <S.ContentArea
          role="contents-input"
          placeholder="내용을 작성해주세요"
          onChange={props.onChangeContent}
          defaultValue={props.data?.fetchBoard.contents}
        ></S.ContentArea>
      </S.ContentsArr>
      <S.AddressArr>
        <S.Label>주소</S.Label>
        <S.AddressSearch>
          <S.Address0
            type="text"
            placeholder="07250"
            readOnly
            value={
              props.zipcode !== ""
                ? props.zipcode
                : props.data?.fetchBoard.boardAddress?.zipcode ?? ""
            }
          />
          <S.SearchButton onClick={props.ToggleModal}>
            우편번호 검색
          </S.SearchButton>
        </S.AddressSearch>

        <S.LongInputAddress
          type="text"
          readOnly
          value={
            props.address !== ""
              ? props.address
              : props.data?.fetchBoard.boardAddress?.address ?? ""
          }
        />
        <S.LongInputAddress
          type="text"
          onChange={props.onChangeAddresssDetail}
          defaultValue={
            props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
          }
        />
      </S.AddressArr>
      <S.Lincked>
        <S.Label>유튜브</S.Label>
        <S.LongInput
          type="text"
          placeholder="링크를 복사해주세요."
          onChange={props.onChangeYoutube}
          defaultValue={props.data?.fetchBoard.youtubeUrl ?? ""}
        />
      </S.Lincked>
      <S.UploadAndSetting>
        <div>
          <S.Label>사진첨부</S.Label>
          <S.UploadBox>
            {props.imageUrls.map((el, index) => (
              // props.imageUrls에서 0번째를 뽑으면 첫번째 이미지가 나오겠지? (props.imageUrls[0])
              <S.UploadDiv key={uuidv4()}>
                <UploadImagesBoard
                  index={index}
                  imageUrl={el}
                  onChangeImageUrls={props.onChangeImageUrls}
                />
              </S.UploadDiv>
            ))}
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
      <S.Submit
        role="submit-button"
        onClick={props.isEdit ? props.onClickEdit : props.onClickSubmit}
        isActive={props.isEdit ? true : props.isActive}
      >
        {props.isEdit ? "수정" : "등록"}하기
      </S.Submit>
    </S.AllBox>
  );
}
