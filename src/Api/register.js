import { gql } from "@apollo/client";

export const REGISTER_MUTATIONS = gql`
  mutation ($input: RegisterInput) {
    register(input: $input) {
      token
      user {
        id
        firstName
        email
        phoneNumber
      }
    }
  }
`;
