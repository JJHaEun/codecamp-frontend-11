import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { wrapFormAsync } from "../../../../commons/libraries/asyncFunc";
import { usedItemSchema } from "../../../../commons/libraries/validations/usedItemValidation";
import { isEditState, isOpenState } from "../../../../commons/stores";
import { useOnChangeAddress } from "../../../commons/hooks/customs/market/useOnchangeAddress";
import { useOnclickCreateUsedItem } from "../../../commons/hooks/customs/market/useOnclickCreateUsedItem";
import { useOnclickUpdateUsedItem } from "../../../commons/hooks/customs/market/useOnclickUpdateUsedItem";
import { useToggleModal } from "../../../commons/hooks/customs/market/useToggleModal";
import { useQueryFetchUsedItem } from "../../../commons/hooks/customs/quries/useQueryFetchUsedItem";
import type { IUseCreateForm } from "./createUsedItem.types";

export default function MarketUI(): JSX.Element {
  const [isEdit] = useRecoilState(isEditState);
  const [isOpen] = useRecoilState(isOpenState);
  const { ToggleModal } = useToggleModal();
  const { onClickCreateUsedItem } = useOnclickCreateUsedItem();
  const { onClickUpdateUsedItem } = useOnclickUpdateUsedItem();
  const { onChangeAddress, address, zipcode } = useOnChangeAddress();
  const { data } = useQueryFetchUsedItem();
  const { register, handleSubmit, formState } = useForm<IUseCreateForm>({
    resolver: yupResolver(usedItemSchema),
    mode: "onSubmit",
  });
  // 오늘 본 상품 로컬스토리지를 이용해 visited를 이용해서 저장
  return (
    <>
      {isOpen && (
        <Modal open={true} onCancel={ToggleModal}>
          <DaumPostcodeEmbed onComplete={onChangeAddress} />
        </Modal>
      )}
      <div>
        <div>
          <h1>{!isEdit ? "상품등록" : "상품수정"}</h1>
        </div>
        <form
          onSubmit={
            !isEdit
              ? wrapFormAsync(handleSubmit(onClickCreateUsedItem))
              : wrapFormAsync(handleSubmit(onClickUpdateUsedItem))
          }
        >
          <div>
            <div>
              <label>상품명</label>
              <input
                type="text"
                {...register("name")}
                defaultValue={data?.fetchUseditem.name ?? ""}
              />
              <div>{formState.errors.name?.message}</div>
            </div>
            <div>
              <label>가격</label>
              <input
                type="text"
                {...register("price")}
                defaultValue={data?.fetchUseditem.price ?? ""}
              />
              <div>{formState.errors.price?.message}</div>
            </div>
          </div>
          <div>
            <label>상품설명</label>
            <input
              type="text"
              {...register("remarks")}
              defaultValue={data?.fetchUseditem.remarks}
            />
            <div>{formState.errors.remarks?.message}</div>
          </div>
          <div>
            <label>상세설명</label>
            <textarea
              placeholder="상품상세설명을 적어주세요"
              {...register("contents")}
              defaultValue={data?.fetchUseditem.contents}
            ></textarea>
            <div>{formState.errors.contents?.message}</div>
          </div>
          <div>
            <label>상품태그</label>
            <input
              type="text"
              {...register("tags")}
              defaultValue={data?.fetchUseditem.tags?.map((el) => el)}
            />
            {/* 태그부분. 애도맵? */}
          </div>
          <div>
            <label>상품이미지</label>
            <div>
              <input
                type="file"
                defaultValue={data?.fetchUseditem.images?.map((el) => el)}
              />
              {/* <input/>사진업로드부분맵으로뿌리기,따로컴포넌트로빼서 */}
            </div>
          </div>
          <div>
            <label>주소</label>
            <div>
              <input
                type="text"
                placeholder="우편번호"
                {...register("useditemAddress.zipcode")}
                readOnly={Boolean(data?.fetchUseditem.useditemAddress?.zipcode)}
                value={
                  zipcode !== ""
                    ? zipcode
                    : data?.fetchUseditem.useditemAddress?.zipcode ?? ""
                }
              />
              <button type="button" onClick={ToggleModal}>
                우편번호검색
              </button>
            </div>
            <div>
              <input
                type="text"
                {...register("useditemAddress.address")}
                readOnly
                value={
                  address !== ""
                    ? address
                    : data?.fetchUseditem.useditemAddress?.address ?? ""
                }
              />
              <input
                type="text"
                placeholder="상세주소"
                {...register("useditemAddress.addressDetail")}
                defaultValue={
                  data?.fetchUseditem.useditemAddress?.addressDetail ?? ""
                }
              />
            </div>
          </div>
          <button>{!isEdit ? "상품등록" : "상품수정"}</button>
        </form>
      </div>
    </>
  );
}
