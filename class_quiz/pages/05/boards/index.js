import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      message
    }
  }
`;

export default function BoardsPage() {
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const router = useRouter();
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
          seller: seller,
          createProductInput: {
            name: name,
            detail: detail,
            price: Number(price),
          },
        },
      });

      router.push(`/05/boards/${result.data.createProduct._id}`);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      판매자: <input type="text" onChange={onChangeSeller} />
      상품명: <input type="text" onChange={onChangeName} />
      상품내용: <input type="text" onChange={onChangeDetail} />
      상품가격: <input type="text" onChange={onChangePrice} />
      <button onClick={onClickSubmit}>상품 등록</button>
    </>
  );
}
