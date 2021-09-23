import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Recipe from '../components/Recipe';
import fetchRecipes from '../httpRequests/httpRequest';
import RecipeFilter from '../components/RecipeFilter';
import { filterRecipes } from '../actions';

const Recipes = () => {
  // state.recipe.meals.meals
  const recipes = useSelector((state) => state.recipe.meals.meals);
  const filtered = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [Loading, setLoading] = useState(true);

  // dispatch(fetchRecipes());
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    dispatch(fetchRecipes());
  }, []);

  console.log(filtered);
  console.log('meals', recipes);
  console.log(typeof recipes);

  const handleFilterChange = (category) => {
    dispatch(filterRecipes(category.target.value)); // updates filtered state
  };

  const filteredRecipes = (filtered !== 'All')
    ? recipes.filter((r) => r.strCategory === filtered)
    : recipes;

  console.log(filteredRecipes);

  return (
    <>
      <RecipeFilter handleFilter={handleFilterChange} recipes={recipes} />
      {filteredRecipes.map((r) => (
        <Recipe key={r.idMeal} recipe={r} />
      ))}
      {Loading && <p>Loading...</p>}
      {!Loading && filteredRecipes.length === 0 && <p>No recipes found</p>}
      {!Loading && filteredRecipes.length > 0 && (
        <Recipe recipe={{ recipes }} /> // recipes hardcoded as object
      )}
      {}
    </>
  );
};

export default Recipes;
