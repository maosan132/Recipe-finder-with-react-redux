// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Recipe = ({ recipe }) => {
  // const uniqueKey = recipe.idMeal;
  console.log('recipe', recipe);
  console.log('tipa', typeof recipe);
  return (
    <>
      <div>
        <img
          alt="recipe Img"
        />
      </div>
      <h4>title</h4>
      <button type="button">
        {/* <Link to={`/recipeInfo/${uniqueKey}`}>
          <h4>Recipe Details</h4>
        </Link> */}
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
