// import { yupResolver } from "@hookform/resolvers/yup";
import DaumPostcodeEmbed from "react-daum-postcode";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { isEditState, isOpenState } from "../../../../commons/stores";
import { useOnChangeAddress } from "../../../commons/hooks/customs/market/useOnchangeAddress";
import { useToggleModal } from "../../../commons/hooks/customs/market/useToggleModal";
import "react-quill/dist/quill.snow.css";

// import { useForm } from "react-hook-form";
// import { useRecoilState } from "recoil";
// import { usedItemSchema } from "../../../../commons/libraries/validations/usedItemValidation";
// import { isEditState, isOpenState } from "../../../../commons/stores";
import { useOnclickCreateUsedItem } from "../../../commons/hooks/customs/market/useOnclickCreateUsedItem";
import type { IUseCreateForm } from "./createUsedItem.types";
import { useQueryFetchUsedItem } from "../../../commons/hooks/customs/quries/useQueryFetchUsedItem";
import { yupResolver } from "@hookform/resolvers/yup";
import { usedItemSchema } from "../../../../commons/libraries/validations/usedItemValidation";
import { useReactQuill } from "../../../commons/hooks/customs/market/onChangeContents";
import * as S from "./createUsedItem.styles";
import { v4 as uuidv4 } from "uuid";
import UploadImagesItem from "../../../commons/upload/uploadImgItems/Upload.container";

export default function MarketUI(): JSX.Element {
  const [isEdit] = useRecoilState(isEditState);
  const [isOpen] = useRecoilState(isOpenState);
  // const { onClickUpdateUsedItem } = useOnclickUpdateUsedItem();
  // const { onChangeImageUrls, imageUrls, setImageUrls } = useOnChoiceImages();

  const { ToggleModal } = useToggleModal();
  const {
    onClickCreateUsedItem,
    onClickUpdateUsedItem,
    imageUrls,
    onChangeImageUrls,
  } = useOnclickCreateUsedItem();
  const { onChangeAddress } = useOnChangeAddress();
  const { data } = useQueryFetchUsedItem();
  const { onChangeContents } = useReactQuill();
  const { register, handleSubmit, formState, trigger, setValue } =
    useForm<IUseCreateForm>({
      resolver: yupResolver(usedItemSchema),
      mode: "onChange",
      defaultValues: {
        name: data?.fetchUseditem.name ?? "",
        price: data?.fetchUseditem.price ?? "",
        remarks: data?.fetchUseditem.remarks,
        contents: data?.fetchUseditem.contents ?? "",
        useditemAddress: {
          addressDetail:
            data?.fetchUseditem.useditemAddress?.addressDetail ?? "",
        },
      },
      values: {
        useditemAddress: {
          address:
            data?.fetchUseditem?.useditemAddress?.address !== null &&
            data?.fetchUseditem?.useditemAddress?.address !== undefined
              ? data?.fetchUseditem.useditemAddress?.address
              : "",
          zipcode:
            data?.fetchUseditem?.useditemAddress?.zipcode !== null &&
            data?.fetchUseditem.useditemAddress?.zipcode !== undefined
              ? data?.fetchUseditem.useditemAddress?.zipcode
              : "",
        },
      },
    });
  const onChange = onChangeAddress(setValue);

  //   // 오늘 본 상품 로컬스토리지를 이용해 visited를 이용해서 저장
  return (
    <S.CreateUpdate>
      {isOpen && (
        <S.AddressModal open={true} onCancel={ToggleModal}>
          <DaumPostcodeEmbed onComplete={onChange} />
        </S.AddressModal>
      )}
      <form
        onSubmit={handleSubmit(
          isEdit ? onClickUpdateUsedItem : onClickCreateUsedItem
        )}
      >
        <S.TitleWrap>
          <div></div>
          <S.Title>상품{isEdit ? "수정" : "등록"}</S.Title>
        </S.TitleWrap>
        <S.WrapRow>
          <S.WrapCol>
            <S.Label>상품명</S.Label>
            <S.Inputs type="text" {...register("name")} />
            <S.ErrorM>{formState.errors.name?.message}</S.ErrorM>
          </S.WrapCol>
          <S.WrapCol>
            <S.Label>가격</S.Label>
            <S.Inputs type="text" {...register("price")} />
            <S.ErrorM>{formState.errors.price?.message}</S.ErrorM>
          </S.WrapCol>
        </S.WrapRow>
        <S.Remarks>
          <S.Label>상품설명</S.Label>
          <S.InputLog type="text" {...register("remarks")} />
          <S.RemarksErrM>{formState.errors.remarks?.message}</S.RemarksErrM>
        </S.Remarks>
        <S.ProductDetailGroup>
          <S.Label>상세설명</S.Label>
          {typeof window !== "undefined" && (
            <S.Detail onChange={onChangeContents(setValue, trigger)} />
          )}

          <S.ProductDetailErrM>
            {formState.errors.contents?.message}
          </S.ProductDetailErrM>
        </S.ProductDetailGroup>
        <S.AddressPhoto>
          <S.AddressWrap>
            <S.Label>주소</S.Label>
            <S.AddressAll>
              <S.Address>
                <S.AddressInputs
                  type="text"
                  placeholder="07250"
                  readOnly
                  {...register("useditemAddress.zipcode")}
                />
                <S.SearchButton type="button" onClick={ToggleModal}>
                  우편번호 검색
                </S.SearchButton>
              </S.Address>
              <S.AddressDetailAndAddress>
                <S.AddressInputs
                  type="text"
                  readOnly
                  {...register("useditemAddress.address")}
                  placeholder="주소"
                />
                <S.AddressDetail
                  type="text"
                  {...register("useditemAddress.addressDetail")}
                  placeholder="상세주소"
                />
              </S.AddressDetailAndAddress>
            </S.AddressAll>
          </S.AddressWrap>
          <S.Photos>
            <S.Label>사진등록</S.Label>
            <S.ImgGroup>
              {imageUrls.map((el, index) => (
                <S.Imgs key={uuidv4()}>
                  <UploadImagesItem
                    imageUrl={el}
                    index={index}
                    onChangeImageUrls={onChangeImageUrls}
                  />
                </S.Imgs>
              ))}
            </S.ImgGroup>
          </S.Photos>
        </S.AddressPhoto>
        <S.UpLoad>{isEdit ? "수정하기" : "등록하기"}</S.UpLoad>
      </form>
    </S.CreateUpdate>
  );
}
