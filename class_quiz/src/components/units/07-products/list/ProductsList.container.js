import { useMutation, useQuery } from "@apollo/client";
import { DELETE_PRODUCTS, FETCH_PRODUCTS } from "./ProductsList.queries";
import ProductsListUI from "./ProductsList.presenter";

export default function ProductsList() {
  const { data } = useQuery(FETCH_PRODUCTS);
  const [deleteProduct] = useMutation(DELETE_PRODUCTS);

  const onClickDelete = (event) => {
    deleteProduct({
      variables: { productId: event.target.id },
      refetchQueries: [{ query: FETCH_PRODUCTS }],
    });
  };

  return (
    <>
      <ProductsListUI data={data} onClickDelete={onClickDelete} />
    </>
  );
}
