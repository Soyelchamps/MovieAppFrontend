import { gql } from "@apollo/client";
export const GET_MOVIES = gql`
  {
    getMovies {
      _id
      title
      description
      likes
      image
      date_of_released
    }
  }
`;

export const GET_NOTES = gql`
  {
    getNotes {
      id
      title
      content
      author
      date
    }
  }
`;
export const LOGIN = gql`
  query login($email: String, $password: String) {
    login(email: $email, password: $password) {
      email
      password
    }
  }
`;
