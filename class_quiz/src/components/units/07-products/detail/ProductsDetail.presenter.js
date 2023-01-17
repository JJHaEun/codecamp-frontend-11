export default function ProductsDetailUI(props) {
  return (
    <>
      <div>판매자: {props.data?.fetchProduct.seller}</div>
      <div>상품명: {props.data?.fetchProduct.name}</div>
      <div>상품내용: {props.data?.fetchProduct.detail}</div>
      <div>가격: {props.data?.fetchProduct.price} 원</div>
    </>
  );
}
