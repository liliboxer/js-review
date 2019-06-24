const createDog = require('./index');

// test suite
describe('dog create function', () => {
// individual tests 
  it('returns a dog object', () => {
    const dog = createDog('Boo', 8, '50lbs');
    expect(dog).toEqual({
      name: 'Boo',
      age: 8,
      weight: '50lbs'
    })
  });

});