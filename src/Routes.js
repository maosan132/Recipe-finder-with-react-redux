import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RecipeInfo from './components/RecipeInfo';
import Nav from './components/Nav';
import Recipes from './containers/Recipes';
import Error from './components/Error';
import About from './components/About';

const Routes = () => (
  <Router>
    <Nav />
    <Switch>
      <Route exact path="/" component={Recipes} />
      <Route path="/recipeinfo/:id" component={RecipeInfo} />
      <Route path="/about" component={About} />
      <Route component={Error} />
    </Switch>
  </Router>
);

export default Routes;
