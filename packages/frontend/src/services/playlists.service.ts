import { gql } from 'apollo-boost';

export const GET_PLAYLISTS = gql`
  {
    playlists {
      id
      name
      description
    }
  }
`;
