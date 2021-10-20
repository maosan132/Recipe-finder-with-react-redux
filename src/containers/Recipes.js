/* eslint-disable */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Recipe from '../components/Recipe';
import fetchRecipes from '../httpRequests/httpRequest';
import { filterRecipes } from '../actions';
import RecipeFilter from '../components/RecipeFilter';
import Loader from '../components/Loader';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import classes from './Recipes.module.css'

const Recipes = () => {
  const recipesData = useSelector((state) => state.recipe.meals.meals);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  console.log(filter);

  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    dispatch(fetchRecipes());
  }, []);

  const handleFilterChange = (category) => {
    dispatch(filterRecipes(category));
  };

  useEffect(() => {
    if (filter) {
      setDisplayData(recipesData.filter((r) => r.strCategory === filter) || [])
    } else {
      setDisplayData(recipesData);
    }
  }, [filter, recipesData?.length])

  const content = loading ? (
    <Loader />
  ) : (
    <div className="recipes">
      <RecipeFilter handleFilter={handleFilterChange} recipes={recipesData} />
      <CardGroup class={classes.group}>
        {displayData.map((r,i) => (
          <Row xs={1} md={2} className="g-2 p-2 center">
            <Recipe key={r.idMeal} recipe={r} />
          </Row>
        ))}
      </CardGroup>
    </div>
  );

  return (
    <>
      {content}
    </>
  );
};

export default Recipes;
