// import { yupResolver } from "@hookform/resolvers/yup";
import DaumPostcodeEmbed from "react-daum-postcode";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { isEditState, isOpenState } from "../../../../commons/stores";
import { useOnChangeAddress } from "../../../commons/hooks/customs/market/useOnchangeAddress";
import { useToggleModal } from "../../../commons/hooks/customs/market/useToggleModal";
import * as S from "./createUsedItem.styles";
import "react-quill/dist/quill.snow.css";

// import { useForm } from "react-hook-form";
// import { useRecoilState } from "recoil";
// import { usedItemSchema } from "../../../../commons/libraries/validations/usedItemValidation";
// import { isEditState, isOpenState } from "../../../../commons/stores";
import { useOnclickCreateUsedItem } from "../../../commons/hooks/customs/market/useOnclickCreateUsedItem";
import type { IUseCreateForm } from "./createUsedItem.types";
import { useOnclickUpdateUsedItem } from "../../../commons/hooks/customs/market/useOnclickUpdateUsedItem";
import { useQueryFetchUsedItem } from "../../../commons/hooks/customs/quries/useQueryFetchUsedItem";
import { yupResolver } from "@hookform/resolvers/yup";
import { usedItemSchema } from "../../../../commons/libraries/validations/usedItemValidation";
import { useReactQuill } from "../../../commons/hooks/customs/market/onChangeContents";
import dynamic from "next/dynamic";
// import type { IUseCreateForm } from "./createUsedItem.types";
import { v4 as uuidv4 } from "uuid";
import { useOnChoiceImages } from "../../../commons/hooks/customs/market/useOnChoiceImages";
import UploadImagesItem from "../../../commons/upload/uploadImgItems/Upload.container";
import { useEffect } from "react";
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function MarketUI(): JSX.Element {
  const [isEdit] = useRecoilState(isEditState);
  const [isOpen] = useRecoilState(isOpenState);
  const { onClickUpdateUsedItem } = useOnclickUpdateUsedItem();
  const { onChangeImageUrls, imageUrls, setImageUrls } = useOnChoiceImages();
  const { ToggleModal } = useToggleModal();
  const { onClickCreateUsedItem } = useOnclickCreateUsedItem();
  const { onChangeAddress } = useOnChangeAddress();
  const { data } = useQueryFetchUsedItem();
  const { onChangeContents } = useReactQuill();
  const { register, handleSubmit, formState, trigger, setValue } =
    useForm<IUseCreateForm>({
      resolver: yupResolver(usedItemSchema),
      mode: "onChange",
      defaultValues: {
        name: data?.fetchUseditem.name ?? "",

        remarks: data?.fetchUseditem.remarks,
        contents: data?.fetchUseditem.contents,
      },
    });
  const onChange = onChangeAddress(setValue);
  useEffect(() => {
    const images = data?.fetchUseditem.images;
    if (images !== undefined && images !== null) {
      setImageUrls([...images]);
    }
  }, [data]);
  //   // 오늘 본 상품 로컬스토리지를 이용해 visited를 이용해서 저장
  return (
    <>
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
        <h1>상품명</h1>
        <input type="text" {...register("name")} />
        <div>
          <label>가격</label>
          <input type="text" {...register("price")} />
          <label>상품설명</label>
          <input type="text" {...register("remarks")} />
        </div>
        <div>
          <label>상세설명</label>
          {typeof window !== "undefined" && (
            <ReactQuill onChange={onChangeContents(setValue, trigger)} />
          )}
        </div>
        <div>
          <label>주소</label>
          <div>
            <input
              type="text"
              placeholder="07250"
              readOnly
              value={
                data?.fetchUseditem?.useditemAddress?.zipcode !== null
                  ? data?.fetchUseditem.useditemAddress?.zipcode
                  : ""
              }
              {...register("useditemAddress.zipcode")}
            />
            <button type="button" onClick={ToggleModal}>
              우편번호 검색
            </button>
          </div>

          <input
            type="text"
            readOnly
            value={
              data?.fetchUseditem?.useditemAddress?.address !== null
                ? data?.fetchUseditem.useditemAddress?.address
                : ""
            }
            {...register("useditemAddress.address")}
          />
          <input
            type="text"
            {...register("useditemAddress.addressDetail")}
            placeholder="상세주소"
          />
        </div>
        {imageUrls.map((el, index) => (
          <div key={uuidv4()}>
            <UploadImagesItem
              imageUrl={el}
              index={index}
              onChangeImageUrls={onChangeImageUrls}
            />
          </div>
        ))}
        <button>{isEdit ? "수정하기" : "등록하기"}</button>
      </form>
    </>
  );
}
