import recipesReducer from '../../reducers/recipesReducer';

describe('recipesReducer', () => {
  it('should be a function', () => {
    const result = recipesReducer;
    expect(typeof result).toBe('function');
  });
});
