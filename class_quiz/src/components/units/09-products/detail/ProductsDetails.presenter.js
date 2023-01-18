export default function ProductDetailUI(props) {
  return (
    <>
      판매자:<div>{props.data?.fetchProduct?.seller}</div>
      상품명:<div>{props.data?.fetchProduct?.name}</div>
      상세:<div>{props.data?.fetchProduct?.detail}</div>
      가격:<div>{props.data?.fetchProduct?.price}</div>
      <button onClick={props.onClickMoveToEdit}>수정하기</button>
    </>
  );
}
