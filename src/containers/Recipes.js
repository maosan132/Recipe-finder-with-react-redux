import { useSelector, useDispatch } from 'react';
import fetchRecipes from '../apiRequests/httpRequest';
import RecipeFilter from '../components/RecipeFilter';
import { filterRecipes } from '../actions';
import Recipe from '../components/Recipe';

const Recipes = () => (
  const dispatch = useDispatch();

content = 
  return (
    <div className={FoodsListStyles.foods}>
      {loading && <div>Loading...</div>}
      {!loading && content}

        : (
          <table className="d-flex flex-wrap">
            {filteredFoods.map(food => (
              <Food key={food.idMeal} food={food} />
            ))}
          </table>
        )}
    </div>
  );
);

export default Recipes;
