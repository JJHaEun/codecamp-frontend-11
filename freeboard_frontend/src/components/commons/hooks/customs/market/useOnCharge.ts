import { Modal } from "antd";
import type { PriceForm } from "../../../../units/mypage/point/point.types";
import { useMutationCreatePointTransactionOfLoading } from "../mutations/useMutationCreatePointTransactionOfLoading";
import { useQueryFetchUserLoggedIn } from "../quries/useQueryFetchUserLoggedIn";

declare const window: typeof globalThis & {
  IMP: any;
};

export const useOnClickCharge = () => {
  const { data: Data } = useQueryFetchUserLoggedIn();
  const [createPointTransactionOfLoading] =
    useMutationCreatePointTransactionOfLoading();

  const onSubmitChargeKakao = (data: PriceForm) => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675");
    IMP.request_pay(
      {
        pg: "kakaopay",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: "포인트 충전",
        amount: data.price,
        buyer_email: Data?.fetchUserLoggedIn.email,
        buyer_name: Data?.fetchUserLoggedIn.name,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/myPage", // 모바일에서는 결제시 페이지 주소가 바뀜. 따라서 결제가 끝나고 돌아갈 주소 입력해야함
      },
      async (rsp: any) => {
        // callback
        if (rsp.success === true) {
          // 결제 성공 시 로직,
          try {
            await createPointTransactionOfLoading({
              variables: {
                impUid: rsp.imp_uid,
              },
            });
            Modal.success({ content: "결제완료!!" });
          } catch (error) {
            if (error instanceof Error) Modal.error({ content: error.message });
          }
        } else {
          // 결제 실패 시 로직,
          Modal.info({
            title: "결제실패",
            content: "결제에 실패하였습니다 다시시도해주세요",
          });
        }
      }
    );
  };
  const onSubmitChargeNice = (data: PriceForm) => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675");
    IMP.request_pay(
      {
        pg: "nice",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: "포인트 충전",
        amount: data.price,
        buyer_email: Data?.fetchUserLoggedIn.email,
        buyer_name: Data?.fetchUserLoggedIn.name,
        m_redirect_url: "http://localhost:3000/myPage", // 모바일에서는 결제시 페이지 주소가 바뀜. 따라서 결제가 끝나고 돌아갈 주소 입력해야함
      },
      async (rsp: any) => {
        // callback
        if (rsp.success === true) {
          // 결제 성공 시 로직,
          try {
            await createPointTransactionOfLoading({
              variables: {
                impUid: rsp.imp_uid,
              },
            });
            Modal.success({ content: "결제완료!!" });
          } catch (error) {
            if (error instanceof Error) Modal.error({ content: error.message });
          }
        } else {
          // 결제 실패 시 로직,
          Modal.info({
            title: "결제실패",
            content: "결제에 실패하였습니다 다시시도해주세요",
          });
        }
      }
    );
  };
  return {
    onSubmitChargeKakao,
    onSubmitChargeNice,
  };
};
