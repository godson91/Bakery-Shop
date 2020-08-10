import React from "react";
import { Switch, Route } from "react-router-dom";

//components
import Main from "./components/Main";
import signin from "./components/Signin"

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/signin" component={signin}/>
  </Switch>
  )


export default Routes;
