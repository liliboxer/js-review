const createDog = require('./create-dog');

describe('dog function', () => {
  it('dog function makes object', () => {
    const dog = createDog('Max', 7, '12lbs');
    expect(dog).toEqual({
      name: 'Max',
      age: 7,
      weight: '12lbs'
    });
  });
});