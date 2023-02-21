import { gql, useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import Script from "next/script";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
  IQuery,
} from "../../../../src/commons/types/generated/types";

interface PriceForm {
  price: number;
}

declare const window: typeof globalThis & {
  IMP: any;
};

const FETCH_USER_LOGGEDIN = gql`
  query {
    fetchUserLoggedIn {
      _id
      name
      email
    }
  }
`;

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
    }
  }
`;
export default function PaymentChargePage(): JSX.Element {
  const router = useRouter();
  const { register, handleSubmit } = useForm<PriceForm>();
  const [createPointTransactionOfLoading] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_TRANSACTION_OF_LOADING);
  const { data: Data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGEDIN);

  const onSubmitCharge = (data: PriceForm): void => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675");
    IMP.request_pay(
      {
        // param
        pg: "kakaopay",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: "포인트충전",
        amount: data.price,
        buyer_email: Data?.fetchUserLoggedIn.email,
        buyer_name: Data?.fetchUserLoggedIn.name,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/28/payment/complete",
      },
      async (rsp: any): Promise<void> => {
        // callback
        if (rsp.success === true) {
          // 결제 성공 시 로직,
          console.log(rsp);
          try {
            await createPointTransactionOfLoading({
              variables: {
                impUid: rsp.imp_uid,
              },
            });
            Modal.success({ content: "결제완료!!" });
            void router.push(`/28/payment/complete`);
          } catch (error) {
            if (error instanceof Error) Modal.error({ content: error.message });
          }
        } else {
          // 결제 실패 시 로직,
          console.log("결제실패");
        }
      }
    );
  };

  return (
    <>
      <Script
        type="text/javascript"
        src="https://code.jquery.com/jquery-1.12.4.min.js"
      ></Script>
      <Script
        type="text/javascript"
        src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
      ></Script>

      {/*  next에서 제공하는 script태그를 넣던지 Head태그를 넣으면 init이 없다는 에러가 해결됨. 다만 Head태그만 쓰면 script태그도 next것을 쓰라고 권장함 */}
      <form onSubmit={handleSubmit(onSubmitCharge)}>
        <input type="radio" value={500} {...register("price")} /> 500원
        <input type="radio" value={1000} {...register("price")} /> 1000원
        <input type="radio" value={2000} {...register("price")} /> 2000원
        <input type="radio" value={5000} {...register("price")} /> 5000원
        <button>충전하기</button>
      </form>
    </>
  );
}
