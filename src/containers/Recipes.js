import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Recipe from '../components/Recipe';
import fetchRecipes from '../httpRequests/httpRequest';
// import RecipeFilter from '../components/RecipeFilter';
// import { filterRecipes } from '../actions';

const Recipes = () => {
  // state.recipe.meals.meals
  const recipesData = useSelector((state) => state.recipe.meals.meals);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  // dispatch(fetchRecipes());
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    dispatch(fetchRecipes());
  }, []);

  console.log(filter, loading);
  console.log('recipe type:', typeof recipesData);
  console.log('recipesData', recipesData);

  // const handleFilterChange = (category) => {
  //   dispatch(filterRecipes(category.target.value)); // updates filtered state
  // };

  const filteredRecipes = (filter !== null)
    ? recipesData.filter((r) => r.strCategory === filter)
    : console.log('no filter');

  console.log('filteredR', typeof filteredRecipes);
  console.log('filter', filteredRecipes);

  return (
    <>
      {/* <RecipeFilter handleFilter={handleFilterChange} recipes={recipesData} />
      {filteredRecipes.map((r) => (
        <Recipe key={r.idMeal} recipe={r} />
      ))} */}
      {/* {Loading && <p>Loading...</p>}
      {!Loading && filteredRecipes.length === 0 && <p>No recipes found</p>}
      {!Loading && filteredRecipes.length > 0 && (
        <Recipe recipe={recipesData} /> // recipes hardcoded as object
      )} */}
      {}
    </>
  );
};

export default Recipes;
