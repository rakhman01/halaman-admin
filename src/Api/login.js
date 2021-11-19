import { gql } from "@apollo/client";

export const LOGIN_MUTATIONS = gql`
  mutation ($input: LoginInput) {
    login(input: $input) {
      token
      user {
        id
        store {
          id
        }
      }
    }
  }
`;
