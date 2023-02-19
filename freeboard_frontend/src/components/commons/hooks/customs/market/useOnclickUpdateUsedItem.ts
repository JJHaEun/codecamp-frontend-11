import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import type { IUseCreateForm } from "../../../../units/market/write/createUsedItem.types";
import { useMutationUpdateUsedItem } from "../mutations/useMutationUpdateUsedItem";
import { useQueryFetchUsedItem } from "../quries/useQueryFetchUsedItem";

export const useOnclickUpdateUsedItem = () => {
  const [updateUseditem] = useMutationUpdateUsedItem();
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const { data } = useQueryFetchUsedItem();
  const router = useRouter();

  const currentImages = JSON.stringify(imageUrls);
  const prevImages = JSON.stringify(data?.fetchUseditem.images);
  const isChangeImages = currentImages !== prevImages;

  const onClickUpdateUsedItem = async (data: IUseCreateForm): Promise<void> => {
    if (
      data.contents === "" &&
      data.name === "" &&
      data.remarks === "" &&
      !isChangeImages &&
      data.useditemAddress?.address === "" &&
      data.useditemAddress?.zipcode === "" &&
      data.useditemAddress?.addressDetail === ""
    ) {
      Modal.info({ content: "수정사항이 없습니다" });
      return;
    }
    if (typeof router.query.productBoardId !== "string") return;
    try {
      const result = await updateUseditem({
        variables: {
          useditemId: router.query.productBoardId,
          updateUseditemInput: {
            name: data.name,
            contents: data.contents,
            remarks: data.remarks,
            tags: data.tags,
            price: Number(data.price),
            useditemAddress: {
              address: data.useditemAddress.address,
              zipcode: data.useditemAddress.zipcode,
              addressDetail: data.useditemAddress.addressDetail,
            },
          },
        },
      });
      console.log(result.data?.updateUseditem.useditemAddress);
      if (typeof result.data?.updateUseditem._id !== "string") {
        Modal.info({ content: "다시시도해주세요" });
        return;
      }
      Modal.success({ content: "성공적으로 수정되었습니다" });
      void router.push(`/market/${result.data.updateUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return {
    onClickUpdateUsedItem,
    setImageUrls,
  };
};
