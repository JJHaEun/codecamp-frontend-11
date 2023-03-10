import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

// const CREATE_BOARD = gql`
//   mutation createBoard($writer: String, $title: String, $contents: String) {
//     createBoard(writer: $writer, title: $title, contents: $contents) {
//       _id
//       number
//       message
//     }
//   }
// `;

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

export default function GraphqlAPIReq() {
  //   const [createBoard] = useMutation(CREATE_BOARD);
  //   const [writer, setWriter] = useState("");
  //   const [title, setTitle] = useState("");
  //   const [contents, setContents] = useState("");

  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");

  //   const onChangeWriter = (event) => {
  //     setWriter(event.target.value);
  //   };

  //   const onChangeTitle = (event) => {
  //     setTitle(event.target.value);
  //   };

  //   const onChangeContents = (event) => {
  //     setContents(event.target.value);
  //   };

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
  const onClickReq = async () => {
    // const result = await createBoard({
    //   //   variables: {
    //   //     writer: "유리",
    //   //     title: "유리의 취미는..",
    //   //     contents: "유리는 소꿉놀이를 좋아해",
    //   //   },
    //   variables: {
    //     writer: writer,
    //     title: title,
    //     contents: contents,
    //   },
    // });
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
  };

  return (
    <>
      {/* 작성자: <input type="text" onChange={onChangeWriter} />
      제목: <input type="text" onChange={onChangeTitle} />
      내용: <input type="text" onChange={onChangeContents} /> */}
      판매자: <input type="text" onChange={onChangeSeller} />
      상품명: <input type="text" onChange={onChangeName} />
      상세: <input type="text" onChange={onChangeDetail} />
      가격: <input type="text" onChange={onChangePrice} />
      <button onClick={onClickReq}>GRAPHQL-API 요청하기</button>
    </>
  );
}
