import gql from "graphql-tag";

export default gql`
  query FetchLyric($id: ID!) {
    lyric(id: $id) {
      content
      id
    }
  }
`;
