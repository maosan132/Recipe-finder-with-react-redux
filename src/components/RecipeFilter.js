import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

const RecipeFilter = ({ handleFilter, recipes }) => {
  const categories = ['All']; // Start with the All category

  if (recipes) {
    recipes.map((r) => {
      if (!categories.includes(r.strCategory)) {
        categories.push(r.strCategory);
      }
      return categories;
    });
  }

  const handleClick = (e) => {
    const { value } = e.target;
    handleFilter(value);
  };

  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlSelect1" className="mx-auto my-0">
        <Form.Label htmlFor="select">Filter by category</Form.Label>
        <Form.Control as="select" id="select" onChange={handleClick}>
          <option disable="true" hidden>
            CATEGORY
          </option>
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

RecipeFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.shape({
    idMeal: PropTypes.string,
    strMeal: PropTypes.string,
    strCategory: PropTypes.string,
    strArea: PropTypes.string,
    strInstructions: PropTypes.string,
  })).isRequired,
};

export default RecipeFilter;

// import React from 'react';

// const RecipeFilter = () => (
//   <div>
//     A recipeFilter
//   </div>
// );

// export default RecipeFilter;
