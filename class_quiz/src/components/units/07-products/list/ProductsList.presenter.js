import * as S from "./ProductsList.styles";

export default function ProductsListUI(props) {
  return (
    <S.TableLine>
      <S.Title>
        <S.CheckLine>체크</S.CheckLine>
        <S.TitleID>상품아이디</S.TitleID>
        <S.TitleSeller>판매자</S.TitleSeller>
        <S.TitleName>상품명</S.TitleName>
      </S.Title>
      {props.data?.fetchProducts.map((el) => (
        <S.Table key={el._id}>
          <S.CheckLine>
            <input type="checkbox" />
          </S.CheckLine>
          <S.IDLine>{el._id.substring(0, 4)}</S.IDLine>
          <S.Seller>{el.seller}</S.Seller>
          <S.Name>{el.name}</S.Name>
          <S.DeleteButtonLine>
            <S.DeleteButton id={el._id} onClick={props.onClickDelete}>
              삭제
            </S.DeleteButton>
          </S.DeleteButtonLine>
        </S.Table>
      ))}
    </S.TableLine>
  );
}
