import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      _id
      seller
      name
      detail
      price
    }
  }
`;

export default function BoardsRoutedPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.product_id },
  });
  return (
    <>
      <div>판매자: {data ? data.fetchProduct.seller : "loading..."}</div>
      <div>상품명: {data ? data.fetchProduct.name : "loading..."}</div>
      <div>상품내용: {data ? data.fetchProduct.detail : "loading..."}</div>
      <div>가격: {data ? data.fetchProduct.price : "loading..."} 원</div>
      {/* <div>판매자: {data?.fetchProduct.seller}</div>
      <div>상품명: {data?.fetchProduct.name}</div>
      <div>상품내용: {data?.fetchProduct.detail}</div>
      <div>가격: {data?.fetchProduct.price} 원</div> */}
    </>
  );
}
