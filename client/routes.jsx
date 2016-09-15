import React from "react";
import { Route, IndexRoute } from "react-router";
import { Home } from "./components/home";
import { ResourceList } from "./components/resource-list";

export const routes = (
  <Route path="/" component={Home}>
    <IndexRoute component={ResourceList}/>
    <Route path="/invite" component={ResourceList}/>
    <Route path="/invite/friendsof/:friendName" component={ResourceList}/>
  </Route>
);
