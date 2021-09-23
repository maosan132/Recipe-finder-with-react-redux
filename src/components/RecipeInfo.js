import React from 'react';
import { useSelector } from 'react-redux';

const RecipeInfo = ({ match }) => {
  const recipeData = useSelector((state) => state.recipe.meals.meals);
  const recipeId = match.params.id;
  console.log(recipeData);
    <div>
      {recipeData
        .filter((r) => r.idMeal === recipeId)
        .map((r) => (
          <div key={r.idMeal}>
            <h1>{r.strMeal}</h1>
            <img src={r.strMealThumb} alt={r.strMeal} />
            {r.strCategory}
            {r.strArea}
            <p>{r.strInstructions}</p>
          </div>
        ))}
    </div>;
};

export default RecipeInfo;
