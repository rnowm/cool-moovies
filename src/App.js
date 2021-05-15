import React from "react";
import { Route, Switch } from "react-router-dom";
import { DetailsContainer } from "./containers/DetailsContainer";
import { HomeContainer } from "./containers/HomeContainer";
import { WithErrors } from "./errors/WithErrors";

export const App = () => (
  <Switch>
    <Route exact path="/" component={HomeContainer} />
    <Route exact path="/details/:movieId" component={DetailsContainer} />
  </Switch>
);

export default WithErrors(App);
