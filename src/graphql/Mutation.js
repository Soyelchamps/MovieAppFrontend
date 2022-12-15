import { gql } from "@apollo/client";
export const CREATE_NOTE = gql`
  mutation createNote(
    $title: String!
    $content: String!
    $date: String!
    $author: String!
  ) {
    createNote(
      input: { title: $title, content: $content, date: $date, author: $author }
    ) {
      id
      title
    }
  }
`;

export const REMOVE_NOTE = gql`
  mutation removeNote($id: ID!) {
    removeNote(id: $id) {
      id
      title
      content
      date
    }
  }
`;

export const UPDATE_MOVIES = gql`
  mutation updateMovie($likes: likes, $_id: ID) {
    updateMovie(input: { likes: $likes }, id: $id) {
      _id
      title
      description
      likes
      image
      date_of_released
    }
  }
`;
