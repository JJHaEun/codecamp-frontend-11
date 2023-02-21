// import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { isEditState, isOpenState } from "../../../../commons/stores";
import { useOnChangeAddress } from "../../../commons/hooks/customs/market/useOnchangeAddress";
import { useToggleModal } from "../../../commons/hooks/customs/market/useToggleModal";
import * as S from "./createUsedItem.styles";
// import { useForm } from "react-hook-form";
// import { useRecoilState } from "recoil";
// import { usedItemSchema } from "../../../../commons/libraries/validations/usedItemValidation";
// import { isEditState, isOpenState } from "../../../../commons/stores";
import { useOnclickCreateUsedItem } from "../../../commons/hooks/customs/market/useOnclickCreateUsedItem";
import { IUseCreateForm } from "./createUsedItem.types";
// import { useOnclickUpdateUsedItem } from "../../../commons/hooks/customs/market/useOnclickUpdateUsedItem";
// import { useToggleModal } from "../../../commons/hooks/customs/market/useToggleModal";
import { useQueryFetchUsedItem } from "../../../commons/hooks/customs/quries/useQueryFetchUsedItem";
// import type { IUseCreateForm } from "./createUsedItem.types";
// import { v4 as uuidv4 } from "uuid";
// import { useOnChoiceImages } from "../../../commons/hooks/customs/market/useOnChoiceImages";

export default function MarketUI(): JSX.Element {
  const [isEdit] = useRecoilState(isEditState);
  const [isOpen] = useRecoilState(isOpenState);
  //   const { onChangeFile, imageUrls } = useOnChoiceImages();
  const { ToggleModal } = useToggleModal();
    const { onClickCreateUsedItem } = useOnclickCreateUsedItem();
  const { onChangeAddress } = useOnChangeAddress();
  //   const { onClickUpdateUsedItem } = useOnclickUpdateUsedItem();
    const { data } = useQueryFetchUsedItem();
  const { register, handleSubmit, formState, trigger } = useForm<IUseCreateForm>({
    // resolver: yupResolver(usedItemSchema),
    mode: "onChange",
  });
  //   console.log(imageUrls);
  //   // 오늘 본 상품 로컬스토리지를 이용해 visited를 이용해서 저장
  return (
    <>
      {isOpen && (
        <S.AddressModal open={true} onCancel={ToggleModal}>
          <DaumPostcodeEmbed onComplete={onChangeAddress} />
        </S.AddressModal>
      )}
      <form onSubmit={handleSubmit(onClickCreateUsedItem)}>
      <label>주소</label>
      <div>
        <input type="text" placeholder="07250" readOnly />
        <button type="button" onClick={ToggleModal}>
          우편번호 검색
        </button>
      </div>

      <input type="text" readOnly defaultValue={data?.fetchUseditem.useditemAddress?.address !==""?data?.fetchUseditem.useditemAddress?.address : }/>
      <input type="text" {...register("useditemAddress.addressDetail")} /></form>
    </>
  );
}
