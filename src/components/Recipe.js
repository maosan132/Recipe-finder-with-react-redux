import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './Recipe.module.css';

const Recipe = ({ recipe }) => {
  const uniqueKey = recipe.idMeal;
  console.log('tipa', typeof recipe);
  return (
    <>
      <div>
        <img
          src={recipe.strMealThumb}
          className={classes.img}
          alt={recipe.strMeal}
        />
      </div>
      <h4>title</h4>
      <button type="button">
        <Link to={`/recipeInfo/${uniqueKey}`}>
          <h4>Recipe Details</h4>
        </Link>
      </button>
    </>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.shape({
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
    idMeal: PropTypes.string,
  }).isRequired,
};

export default Recipe;
