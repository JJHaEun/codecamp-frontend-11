import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import type { SetStateAction, Dispatch } from "react";

import type { IUseCreateForm } from "../../../../units/market/write/createUsedItem.types";
import { useMutationCreateUsedItem } from "../mutations/useMutationCreateUsedItem";
import { useMutationUpdateUsedItem } from "../mutations/useMutationUpdateUsedItem";
import {
  FETCH_USED_ITEM,
  useQueryFetchUsedItem,
} from "../quries/useQueryFetchUsedItem";
// import { useOnChangeImagUrls } from "./useOnChangeImageUrls";/

interface IuseOnclickCreateUsedItem {
  onClickCreateUsedItem: (data: IUseCreateForm) => Promise<void>;
  onClickUpdateUsedItem: (data: IUseCreateForm) => Promise<void>;
  imageUrls: string[];
  onChangeImageUrls: (imageUrl: string, index: number) => void;
  setImageUrls: Dispatch<SetStateAction<string[]>>;
}
export const useOnclickCreateUsedItem = (): IuseOnclickCreateUsedItem => {
  const [createUseditem] = useMutationCreateUsedItem();
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [updateUseditem] = useMutationUpdateUsedItem();
  const { data } = useQueryFetchUsedItem();
  const router = useRouter();

  const currentImages = JSON.stringify(imageUrls);
  const prevImages = JSON.stringify(data?.fetchUseditem.images);
  const isChangeImages = currentImages !== prevImages;
  const onChangeImageUrls = (imageUrl: string, index: number): void => {
    const newImageUrls = [...imageUrls];
    newImageUrls[index] = imageUrl;
    setImageUrls(newImageUrls);
  };
  useEffect(() => {
    const images = data?.fetchUseditem.images;
    if (images !== undefined && images !== null) {
      setImageUrls([...images]);
    }
  }, [data]);
  // const { imageUrls } = useOnChangeImagUrls();

  const onClickCreateUsedItem = async (data: IUseCreateForm): Promise<void> => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: String(data.name),
            remarks: String(data.remarks),
            contents: String(data.contents),
            price: Number(data.price),
            tags: data.tags?.split(" "),
            useditemAddress: {
              address: data.useditemAddress.address,
              zipcode: data.useditemAddress.zipcode,
              addressDetail: data.useditemAddress.addressDetail,
            },
            images: [...imageUrls],
          },
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchUseditems: (prev) => {
                return [data?.createUseditem, ...prev];
              },
            },
          });
        },
      });
      console.log(result.data?.createUseditem.useditemAddress?.address);
      if (result.data?.createUseditem._id === undefined) {
        Modal.info({ content: "다시시도해주세요" });
        return;
      }

      Modal.success({ content: "상품이 성공적으로 등록되었습니다" });

      void router.push(`/market/${result.data?.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: "다시 시도해주세요" });
    }
  };

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
            tags: data.tags?.split(","),
            price: Number(data.price),
            images: [...imageUrls],
            useditemAddress: {
              address: data.useditemAddress.address,
              zipcode: data.useditemAddress.zipcode,
              addressDetail: data.useditemAddress.addressDetail,
            },
          },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: { useditemId: router.query.productBoardId },
          },
        ],
      });
      if (typeof result.data?.updateUseditem._id !== "string") {
        Modal.info({ content: "다시시도해주세요" });
        return;
      }
      console.log(result.data.updateUseditem._id);
      void router.push(`/market/${result.data.updateUseditem._id}`);
      Modal.success({ content: "성공적으로 수정되었습니다" });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return {
    onClickCreateUsedItem,
    onClickUpdateUsedItem,
    imageUrls,
    onChangeImageUrls,
    setImageUrls,
  };
};
