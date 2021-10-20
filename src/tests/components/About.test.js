import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom';
import About from '../../components/About';

Enzyme.configure({ adapter: new Adapter() });

describe('<About />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<About />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('contains About Us header', () => {
    render(
      <Router>
        <About />
      </Router>,
    );
    expect(screen.getByText('About Us')).toBeInTheDocument();
  });

  test('it contains p element with texts', () => {
    const wrapper = shallow(<About />);
    const paragraph = (
      <p>
        Browse over 7,000 recipes. Discover quick and easy dinners, delicious
        dessert recipes, the latest food trends and more. What will you cook
        today?
      </p>
    );
    expect(wrapper.containsMatchingElement(paragraph)).toBe(true);
  });
});
