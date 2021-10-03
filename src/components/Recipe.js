import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import classes from './Recipe.module.css';

const Recipe = ({ recipe }) => {
  const identifier = recipe.idMeal;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
      />
      <Card.Body>
        <Card.Title>{recipe.strMeal}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <Button variant="primary">
          <Link to={`/recipeInfo/${identifier}`} style={{ color: '#fff', textDecoration: 'none' }}>Recipe Details</Link>
        </Button>
      </Card.Body>
    </Card>
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
