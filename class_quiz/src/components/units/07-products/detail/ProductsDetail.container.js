import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_PRODUCT } from "./ProductsDetail.queries";
import ProductsDetailUI from "./ProductsDetail.presenter";

export default function ProductsDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.product_id },
  });
  return <ProductsDetailUI data={data} />;
}
