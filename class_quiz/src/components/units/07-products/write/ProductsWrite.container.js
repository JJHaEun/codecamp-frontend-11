import { CREATE_PRODUCT } from "./ProductsWrite.queries";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import ProductsWriteUI from "./ProductsWrite.presenter";

export default function ProductsWrite() {
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const router = useRouter();
  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");
  const [isActive, setIsActive] = useState(false);

  const onChangeSeller = (event) => {
    setSeller(event.target.value);
    if (event.target.value && name && detail && price) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeName = (event) => {
    setName(event.target.value);
    if (seller && event.target.value && detail && price) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeDetail = (event) => {
    setDetail(event.target.value);
    if (seller && name && event.target.value && price) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangePrice = (event) => {
    setPrice(event.target.value);
    if (seller && name && detail && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
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

      router.push(`/07/products/${result.data.createProduct._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ProductsWriteUI
      onChangeSeller={onChangeSeller}
      onChangeName={onChangeName}
      onChangeDetail={onChangeDetail}
      onChangePrice={onChangePrice}
      onClickSubmit={onClickSubmit}
      isActive={isActive}
    />
  );
}
