import { gql } from "@apollo/client";

export const FETCH_PRODUCTS = gql`
  query {
    fetchProducts {
      _id
      seller
      name
      detail
    }
  }
`;

export const DELETE_PRODUCTS = gql`
  mutation deleteProduct($productId: ID) {
    deleteProduct(productId: $productId) {
      _id
      message
    }
  }
`;
