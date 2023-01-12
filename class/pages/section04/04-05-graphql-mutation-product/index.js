import { useMutation, gql } from "@apollo/client";

const CREATE_PRODUCT = gql`
  # prettier-ignore
  mutation createProduct($seller:String , $createProductInput:CreateProductInput!){ # 변수의 타입적는 곳.
    createProduct(seller: $seller, createProductInput: $createProductInput) { # 실제 우리가 전달할 변수 적는 곳.
      _id
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [createProduct] = useMutation(CREATE_PRODUCT);
  // const [나의함수] = useMutation(나의그래프큐엘세팅);
  const onClickSubmit = async () => {
    // const result = 나의함수();
    const result = await createProduct({
      // $: {
      //   seller: "훈이",
      //   createProductInput: {
      //     name: "마우스",
      //     detail: "정말좋음",
      //     price: 3000,
      //   },
      // },
      variables: {
        seller: "훈이",
        createProductInput: {
          name: "마우스",
          detail: "정말좋음",
          price: 3000,
        },
      },
    });

    console.log(result);
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>; // 한줄일때는 소괄호 필요없음
}
