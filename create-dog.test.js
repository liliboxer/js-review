const createDog = require('./index');

describe('dog function', () => {
  it('createDog makes dog object', () => {
    const dog = createDog('Sam', 2, '20lbs');
    expect(dog).toEqual({
      name: 'Sam',
      age: 2,
      weight: '20lbs'
    })
  })
})