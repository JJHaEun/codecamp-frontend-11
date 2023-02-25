import { Modal } from "antd";
import { useRouter } from "next/router";
import { useMutationCreatePointTransactionOfBuyingAndSelling } from "../mutations/useMutationCreatePointTransactionBuyingSelling";

export const useOnClickBuy = () => {
  const [createPointTransactionOfBuyingAndSelling] =
    useMutationCreatePointTransactionOfBuyingAndSelling();
  const router = useRouter();

  const onClickBuy = async (): Promise<void> => {
    if (typeof router.query.productBoardId !== "string") {
      Modal.info({ content: "다시시도해주세요" });
      return;
    }
    await createPointTransactionOfBuyingAndSelling({
      variables: {
        useritemId: router.query.productBoardId,
      },
    });
  };
  return {
    onClickBuy,
  };
};
