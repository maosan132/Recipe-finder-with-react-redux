// import RecipeFilter from '../components/RecipeFilter';
// import { filterRecipes } from '../actions';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Recipe from '../components/Recipe';
// import { httpRequest } from '../actions';
import fetchRecipes from '../httpRequests/httpRequest';

const Recipes = () => {
  const recipes = useSelector((state) => state.meals);
  const filtered = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  console.log(recipes);
  console.log(filtered);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  return (
    <div>
      <Recipe />
    </div>
  );
};

export default Recipes;
