type User = {
  readonly name: string;
  age: number;
  address: {
    city: string;
  };
  readonly skills: ReadonlyArray<string>;
};

const messi: User = {
  name: 'Messi',
  age: 35,
  address: {
    city: 'Paris',
  },
  skills: ['Dribbling', 'Shooting'],
};

// messi.name = 'Lionel Messi';
// messi.skills = ['Shooting'];
// messi.skills.push('Heading');
