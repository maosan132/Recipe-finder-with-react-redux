import { useSelector, useDispatch } from 'react';
import fetchRecipes from '../httpRequests/httpRequest';
import RecipeFilter from '../components/RecipeFilter';
import { filterRecipes } from '../actions';
import Recipe from '../components/Recipe';

const Recipes = () => {
  //const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    dispatch(fetchRecipes(foods2));
  }, []);

  content = <Recipe />;

  return (
    <div>
      {loading && <div>Loading...</div>}
      {!loading && content}
    </div>
  );
};

export default Recipes;
