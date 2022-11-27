const user = {
  name: 'Messi',
  age: 35,
  address: {
    city: 'Paris',
  },
} as const;

// user.name = 'Lionel Messi';
// user.address.city = 'Barcelona';

const skills = ['C#', 'Typescript'] as const;
// skills.push('Cucumber');
