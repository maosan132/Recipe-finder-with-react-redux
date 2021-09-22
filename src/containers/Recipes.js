import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Recipe from '../components/Recipe';
import fetchRecipes from '../httpRequests/httpRequest';
import RecipeFilter from '../components/RecipeFilter';
import { filterRecipes } from '../actions';

const Recipes = () => {
  // state.recipe.recipes.meals
  const recipes = useSelector((state) => state.recipe.meals.meals);
  const filtered = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  console.log(filtered);

  console.log('meals', recipes);
  console.log(typeof recipes);

  const handleFilterChange = (category) => {
    dispatch(filterRecipes(category));
  };

  const filteredRecipes = recipes.filter((r) => (
    !!((filtered === 'All' || filtered === r.strCategory))));

  return (
    <div>
      <RecipeFilter handleFilter={handleFilterChange} recipes={['dsfsdfsdf']} />
      {filteredRecipes.map((r) => (
        <Recipe key={r.idMeal} recipe={r} />
      ))}
      <Recipe recipe={recipes} />
    </div>
  );
};

export default Recipes;
