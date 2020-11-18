import React from 'react';
import HeadSail from "./components/HeadSail";
import {Switch, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
      <Switch>
          <Route path={"/dashboard"}>
              <Dashboard/>
          </Route>
          <Route path={"/headsail"}>
              <HeadSail/>
          </Route>
      </Switch>
  );
}

