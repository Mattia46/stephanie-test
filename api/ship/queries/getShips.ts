import { gql } from "@apollo/client";

export const GET_SHIPS = gql`
  query getShips($offset: Int, $limit: Int) {
    ships(offset: $offset, limit: $limit) {
      id
      image
      name
      model
    }
  }
`;

// We can leverage this query to retrieve as many information as needed for the /ship/[id] page
export const GET_SHIP = gql`
  query ($id: ID!) {
    ship(id: $id) {
      id
      image
      name
      model
    }
  }
`;
