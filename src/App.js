import React from "react";
import { Route, Switch } from "react-router-dom";
import { DetailsComponent } from "./components/DetailsComponent";
import { HomeContainer } from "./containers/HomeContainer";
import { WithErrors } from "./hocs/WithErrors";

export const App = () => (
  <Switch>
    <Route exact path="/" component={HomeContainer} />
    <Route exact path="/details/:id" component={DetailsComponent} />
  </Switch>
);

export default WithErrors(App);
