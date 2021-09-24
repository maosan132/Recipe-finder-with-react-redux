import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const RecipeInfo = () => {
  const recipeData = useSelector((state) => state.recipe.meals.meals);
  const { id } = useParams();
  console.log('data', recipeData);

  return (
    <div>
      {recipeData
        ?.filter((r) => parseInt(r.idMeal, 10) === parseInt(id, 10))
        .map((r) => (
          <div key={r.idMeal}>
            <h1>{r.strMeal}</h1>
            <img src={r.strMealThumb} alt={r.strMeal} />
            <span>
              <strong>Category: </strong>
              {r.strCategory}
            </span>
            {r.strArea}
            <p>{r.strInstructions}</p>
            <a href={r.strSource}>Source</a>
          </div>
        ))}
    </div>
  );
};

export default RecipeInfo;
