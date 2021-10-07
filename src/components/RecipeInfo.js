import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import classes from './RecipeInfo.module.css';

const RecipeInfo = () => {
  const recipeData = useSelector((state) => state.recipe.meals.meals);
  const { id } = useParams();
  const ingredients = [];
  const measures = [];

  const recipe = recipeData.find((recipe) => recipe.idMeal === id);

  Object.keys(recipe).map((key) => (
    (key.includes('strIngredient') && recipe[key] !== '' && recipe[key] !== null) && ingredients.push(recipe[key])
  ));

  Object.keys(recipe).map((key) => (
    (key.includes('strMeasure') && recipe[key] !== '') && measures.push(recipe[key])
  ));

  return (
    <Container key={id} className={classes.container}>
      <Row>
        <Col key={recipe.idMeal} className={`${classes.heading}`}>
          <h2 className={classes.title}>{recipe.strMeal}</h2>
          <ul className={classes.nobullet}>
            <li>
              <strong>Category:</strong>
              {recipe.strCategory}
            </li>
            <li>
              <strong>Cuisine:</strong>
              {recipe.strArea}
            </li>
          </ul>
          <h4>Ingredients:</h4>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={ingredient}>
                {ingredient}
                {measures[index]}
              </li>
            ))}
          </ul>
          <h4>Instructions</h4>
          <p>{recipe.strInstructions}</p>
        </Col>
        <Col className={classes.imgContainer}>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <br />
          <a href={recipe.strSource} className={classes.source}>Recipe&apos;s Source</a>
        </Col>
      </Row>
    </Container>
  );
};

export default RecipeInfo;
