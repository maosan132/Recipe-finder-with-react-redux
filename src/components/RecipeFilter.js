import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import classes from './RecipeFilter.module.css';

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
    console.log(value);
  };

  return (
    <Form>
      <Form.Group className="d-flex justify-content-center p-2">
        <Form.Label htmlFor="select" className={`${classes.label} align-self-center`}>Select a category: </Form.Label>
        <Form.Control as="select" id="select" onChange={handleClick} className={`${classes.input} w-25`}>
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </Form.Control>
        <button type="button">Clear</button>
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
