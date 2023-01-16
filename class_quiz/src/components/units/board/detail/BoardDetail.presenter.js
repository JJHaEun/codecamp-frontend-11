export default function BoardDetailUI(props) {
  return (
    <>
      <div>판매자: {props.data ? data.fetchProduct.seller : "loading..."}</div>
      <div>상품명: {props.data ? data.fetchProduct.name : "loading..."}</div>
      <div>
        상품내용: {props.data ? data.fetchProduct.detail : "loading..."}
      </div>
      <div>가격: {props.data ? data.fetchProduct.price : "loading..."} 원</div>
      {/* <div>판매자: {data?.fetchProduct.seller}</div>
        <div>상품명: {data?.fetchProduct.name}</div>
        <div>상품내용: {data?.fetchProduct.detail}</div>
        <div>가격: {data?.fetchProduct.price} 원</div> */}
    </>
  );
}
