const { getState, updateState } = require('./store')

describe('state', () => {
  it('get state returns state', () => {
    const state = getState();
    expect(state).toEqual({
      shirts: 5,
      pants: 10,
      toys: 100,
      shoes: 1,
      apples: 9
    });
  });

  it('update state adds key and value pair', () => {
    updateState('shirts', 50);
    expect(getState()).toEqual({
      shirts: 50,
      pants: 10,
      toys: 100,
      shoes: 1,
      apples: 9
    });
  });
});