/* eslint-disable */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Recipe from '../components/Recipe';
import fetchRecipes from '../httpRequests/httpRequest';
import RecipeFilter from '../components/RecipeFilter';
import { filterRecipes } from '../actions';

const Recipes = () => {
  // state.recipe.meals.meals
  const recipesData = useSelector((state) => state.recipe.meals.meals);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    dispatch(fetchRecipes());
  }, []);

  console.log(filter, loading);
  console.log('recipe type:', typeof recipesData);
  console.log('recipesData', recipesData);

  const handleFilterChange = (category) => {
    dispatch(filterRecipes(category));
  };

  useEffect(() => {
    if (filter) {
      setDisplayData(recipesData?.filter((r) => r.strCategory === filter) || [])
    } else {
      setDisplayData(recipesData);
    }
  }, [filter, recipesData?.length])

  return (
    <>
      <RecipeFilter handleFilter={handleFilterChange} recipes={recipesData} />
      {loading && <p>Loading...</p>}
      {!loading && displayData.length === 0 && <p>No recipes found</p>}
      {!loading && displayData.length > 0 && (
        displayData?.map((r) => (
          <Recipe key={r.idMeal} recipe={r} />
        ))
      )}
    </>
  );
};

export default Recipes;
