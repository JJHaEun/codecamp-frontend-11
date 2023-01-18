import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "./ProductsWrite.queries";
import { useRouter } from "next/router";
import ProductWriteUI from "./ProductsWrite.presenter";

export default function ProductWrite(props) {
  const router = useRouter();
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);
  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");

  const onChangeSeller = (event) => {
    setSeller(event.target.value);
  };
  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangeDetail = (event) => {
    setDetail(event.target.value);
  };
  const onChangePrice = (event) => {
    setPrice(event.target.value);
  };
  const onClickSubmit = async () => {
    try {
      const result = await createProduct({
        variables: {
          seller,
          createProductInput: {
            name,
            detail,
            price: Number(price),
          },
        },
      });
      // console.log(result);
      router.push(`/09/${result.data.createProduct._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickUpdate = async () => {
    try {
      const result = await updateProduct({
        variables: {
          productId: router.query.product_Id,
          updateProductInput: {
            name,
            detail,
            price: Number(price),
          },
        },
      });

      router.push(`/09/${result.data.updateProduct._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <ProductWriteUI
        isEdit={props.isEdit}
        onChangeSeller={onChangeSeller}
        onChangeName={onChangeName}
        onChangeDetail={onChangeDetail}
        onChangePrice={onChangePrice}
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
      />
    </>
  );
}
