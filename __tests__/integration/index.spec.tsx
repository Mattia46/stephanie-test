import { MockedProvider } from '@apollo/client/testing';
import { GET_SHIPS } from '@api/ship/queries/getShips';
import { HomePage } from '../../page-content/home/HomePage';
import { render, screen, act } from "@testing-library/react";

const data = {
  "ships": [
    {
      "id": "GOMSTREE",
      "image": "https://i.imgur.com/MtEgYbY.jpg",
      "name": "GO Ms Tree",
      "model": null,
    },
    {
      "id": "GOPURSUIT",
      "image": "https://i.imgur.com/5w1ZWre.jpg",
      "name": "GO Pursuit",
      "model": null,
    },
  ]
}
const getShipsMock = {
  request: {
    query: GET_SHIPS,
    variables: {
      offset: 0,
      limit: 10
    }
  },
  result: {
    data
  }
};

describe('Home Page', () => {
  beforeEach(async () => {
    render(
      <MockedProvider mocks={[getShipsMock]} addTypename={false}>
        <HomePage />
      </MockedProvider>
    );
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
  });

  test('should load and render 2 ships cards', async () => {
    const shipCards = screen.getAllByTestId('ship-card');
    expect(shipCards.length).toBe(data.ships.length);
  });

  test('the first shipCard should have a link to /GOMSTREE', async () => {
    const shipCards = screen.getAllByRole('link');
    expect(shipCards[0]).toHaveAttribute('href', `/ship/${data.ships[0].id}`);
  });

});
