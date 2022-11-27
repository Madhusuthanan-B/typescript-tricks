type Car = {
  color: string;
  brand?: string;
  engine?: string;
};

const altroz: Required<Car> = {
  color: 'red',
  brand: 'Tata',
  engine: 'Revotron',
};

console.log(altroz);
