export default function ProductWriteUI(props) {
  return (
    <>
      판매자:
      <input type="text" onChange={props.onChangeSeller} />
      상품명:
      <input type="text" onChange={props.onChangeName} />
      상세:
      <input type="text" onChange={props.onChangeDetail} />
      가격:
      <input type="text" onChange={props.onChangePrice} />
      <button
        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
      >
        {props.isEdit ? "수정" : "등록"}하기
      </button>
    </>
  );
}
