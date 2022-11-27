class Ship {
  name: string;
  description: string;
  imo: number;
  image: string;
}

const ship: Ship = {
  name: 'Trollfjord',
  description: 'A ship',
  imo: 1122334,
  image: 'https://somedummyurl.com/trollfjord.png',
};

type ShipWithoutDescription = Omit<Ship, 'description'>;

const shipWithNoDescription: ShipWithoutDescription = {
  name: 'Trollfjord',
  image: 'https://somedummyurl.com/trollfjord.png',
  imo: 1122334,
};

type ShipPreview = Pick<Ship, 'name' | 'image'>;

const shipPreview: ShipPreview = {
  name: 'Trollfjord',
  image: 'https://somedummyurl.com/trollfjord.png',
};
