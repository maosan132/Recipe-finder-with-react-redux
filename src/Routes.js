import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RecipeDetails from './components/RecipeInfo';
import Nav from './components/Nav';
import RecipesList from './containers/RecipesList';

const Routes = () => (
  <Router>
    <Nav />
    <Switch>
      <Route exact path="/" component={RecipesList} />
      <Route path="/IngredientDetails/:id" component={RecipeDetails} />
      <Route component={Error} />
    </Switch>
  </Router>
);

export default Routes;
