declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentPage(): JSX.Element {
  const onClickPayment = (): void => {
    // 결제창열기
    // imp40037636
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp40037636"); // 예: imp00000000a
    IMP.request_pay(
      {
        // param
        pg: "kakaopay",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",// 겹치지않게 랜덤생성위해 주문번호는 주석
        name: "노르웨이 회전 의자",
        amount: 100,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        // 모바일 상태에서 결제하기를 누르게되면 결제창이 열리면서 주소가 변경됨. => 모바일 결제시 결제끝나고 다시 돌아갈 주소입력필요
        m_redirect_url: "http://localhost:3000/section28/28-01-payment", // 모바일에서는 결제시 페이지 주소가 바뀜. 따라서 결제가 끝나고 돌아갈 주소 입력해야함
      },
      (rsp: any) => {
        // callback
        if (rsp.success === true) {
          // 결제 성공 시 로직,
          console.log(rsp);

          // 결제뮤테이션 보내기(벡엔드에 결제관련 데이터 넘겨주기(뮤테이션 실행)
          // createPointTransactionOfLoading => 포인트 구매
          // 상품 구매 및 판매 => createPointTransactionByingOrSelling~~..
        } else {
          // 결제 실패 시 로직,
        }
      }
    );
  };

  return (
    <>
      {/* <!-- jQuery --> */}
      <script
        type="text/javascript"
        src="https://code.jquery.com/jquery-1.12.4.min.js"
      ></script>
      {/* <!-- iamport.payment.js --> */}
      {/* JavaScript SDK 신버전것으로 바꿔붙여넣기. */}
      <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      <button onClick={onClickPayment}>결제하기</button>
    </>
  );
}
