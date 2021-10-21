import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Recipe from '../../components/Recipe';

describe('<Recipe />', () => {
  const recipe = {
    recipes: {
      meals: [{ 0: { name: 'Recipe1', category: 'Vegetarian' } },
        { 1: { name: 'Recipe2', category: 'Seafood' } }],
    },
  };

  it('it renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Recipe recipe={recipe} />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders an image', () => {
    const { queryAllByTestId } = render(
      <Router>
        <Recipe recipe={recipe} />
      </Router>,
    );
    const image = queryAllByTestId('image');
    expect(image[0]).toBeTruthy();
  });

  it('renders a name', () => {
    const { queryAllByTestId } = render(
      <Router>
        <Recipe recipe={recipe} />
      </Router>,
    );
    const name = queryAllByTestId('name');
    expect(name[0]).toBeTruthy();
  });

  it('renders an image corecctly', () => {
    const { queryAllByTestId } = render(
      <Router>
        <Recipe recipe={recipe} />
      </Router>,
    );
    const image = queryAllByTestId('img');
    expect(image[0]).toBeFalsy();
  });

  it('renders a name', () => {
    const { queryAllByTestId } = render(
      <Router>
        <Recipe recipe={recipe} />
      </Router>,
    );
    const name = queryAllByTestId('name');
    expect(name[0]).not.toBeFalsy();
  });
});
