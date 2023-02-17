import { Modal } from "antd";
import { useRouter } from "next/router";
import type { IUseCreateForm } from "../../../../units/market/write/createUsedItem.types";
import { useMutationCreateUsedItem } from "../mutations/useMutationCreateUsedItem";

interface IuseOnclickCreateUsedItem {
  onClickCreateUsedItem: (data: IUseCreateForm) => Promise<void>;
}
export const useOnclickCreateUsedItem = (): IuseOnclickCreateUsedItem => {
  const [createUseditem] = useMutationCreateUsedItem();
  const router = useRouter();
  const onClickCreateUsedItem = async (data: IUseCreateForm): Promise<void> => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: data.tags,
            useditemAddress: {
              zipcode: data.useditemAddress.zipcode,
              address: data.useditemAddress.address,
              addressDetail: data.useditemAddress.addressDetail,
            },
            images: data.images,
          },
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchBoards: (prev) => {
                return [data?.createUseditem, ...prev];
              },
            },
          });
        },
      });
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
  return {
    onClickCreateUsedItem,
  };
};
