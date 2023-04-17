// import { gql } from 'graphql-tag';
import { gql } from '@apollo/client';


export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;


// other queries and mutations can be added here
