import Script from "next/script";
import { useForm } from "react-hook-form";
import { useOnClickCharge } from "../../../commons/hooks/customs/market/useOnCharge";
import type { PriceForm } from "./point.types";

export default function PointChargeNice(): JSX.Element {
  const { register, handleSubmit } = useForm<PriceForm>();
  const { onSubmitChargeNice } = useOnClickCharge();
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

      <div>
        <form onSubmit={handleSubmit(onSubmitChargeNice)}>
          <input type="radio" value={500} {...register("price")} /> 500원
          <input type="radio" value={1000} {...register("price")} /> 1000원
          <input type="radio" value={2000} {...register("price")} /> 2000원
          <input type="radio" value={5000} {...register("price")} /> 5000원
          <button>나이스 충전하기</button>
        </form>
      </div>
    </>
  );
}
