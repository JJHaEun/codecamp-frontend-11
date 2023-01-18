import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_PRODUCT } from "./ProductsDetails.queries";
import ProductDetailUI from "./ProductsDetails.presenter";

export default function ProductDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: router.query.product_Id,
    },
  });

  const onClickMoveToEdit = () => {
    router.push(`/09/${router.query.product_Id}/edit`);
  };

  return (
    <>
      <ProductDetailUI data={data} onClickMoveToEdit={onClickMoveToEdit} />
    </>
  );
}
