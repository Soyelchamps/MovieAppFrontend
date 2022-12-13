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

export const UPDATE_NOTE = gql`
  mutation updateNote(
    $title: String!
    $content: String
    $date: String
    $author: String
    $id: ID
  ) {
    updateNote(
      input: { title: $title, content: $content, date: $date, author: $author }
      id: $id
    ) {
      id
      title
    }
  }
`;
