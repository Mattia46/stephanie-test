export interface Ship {
  id: string;
  image: string;
  name: string;
  model: string;
}

export type ShipsList = {
  ships: Ship[];
};

