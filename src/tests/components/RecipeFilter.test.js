import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import RecipeFilter from '../../components/RecipeFilter';

Enzyme.configure({ adapter: new Adapter() });

afterEach(cleanup);

const recipes = [
  { 0: { id: 1, name: 'Recipe1', category: 'Vegetarian' } },
  { 1: { id: 2, name: 'Recipe2', category: 'Seafood' } },
];

describe('<RecipeFilter />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<RecipeFilter handleFilter={() => 'mock'} key={recipes.id} recipes={recipes} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it('it contains an option element', () => {
  //   const wrapper = shallow(
  //     <RecipeFilter
  //       handleFilter={() => 'mock'}
  //       key={recipes.id}
  //       recipes={recipes}
  //     />,
  //   );
  //   const option = <option>CATEGORIES</option>;
  //   expect(wrapper.containsMatchingElement(option)).toBe(true);
  // });

  // it('renders a select input', () => {
  //   const { queryAllByTestId } = render(
  //     <RecipeFilter handleFilter={() => 'mock'} key={recipes.id} recipes={recipes} />,
  //   );
  //   const result = queryAllByTestId('categories');
  //   expect(result).toBeTruthy();
  //   expect(result[0]).toHaveTextContent('CATEGORIES');
  //   expect(result[0]).toHaveTextContent('All');
  // });
});
