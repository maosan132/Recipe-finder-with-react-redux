import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardHeader from 'react-bootstrap/esm/CardHeader';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import classes from './Recipe.module.css';

const Recipe = ({ recipe }) => {
  const identifier = recipe.idMeal;
  return (
    <Card className={classes.Card}>
      <CardHeader>
        <Card.Title className={classes.title}>{recipe.strMeal}</Card.Title>
      </CardHeader>
      <Card.Img
        variant="top"
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
      />
      <Card.Body>
        <Card.Text>
          {`Category: ${recipe.strCategory}`}
        </Card.Text>
        <Link
          to={`/recipeInfo/${identifier}`}
          style={{ color: '#fff', textDecoration: 'none' }}
        >
          <Button className={classes.button}>Recipe Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.shape({
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
    idMeal: PropTypes.string,
    strCategory: PropTypes.string,
  }).isRequired,
};

export default Recipe;
