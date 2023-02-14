import { gql } from "@apollo/client";

export const FETCH_USER_LOGGEDIN = gql`
  query {
    fetchUserLoggedIn {
      _id
      name
    }
  }
`;
