import { gql } from "@apollo/client";

export const USERS_QUERY = gql`
  query {
    users {
      id
      firstName
      email
      phoneNumber
      role
    }
  }
`;

export const USER_QUERY = gql`
  query {
    user {
      id
      firstName
      email
      phoneNumber
      role
    }
  }
`;

export const DELETE_USER = gql`
  mutation ($id: String!) {
    deleteUser(id: $id) {
      id
      firstName
      email
      phoneNumber
    }
  }
`;
