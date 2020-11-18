import React from 'react';
import HeadSail from "./components/HeadSail";
import {Switch, Route} from "react-router-dom";

export default function App() {
  return (
      <Switch>
          <Route path={"/headsail"}>
              <HeadSail/>
          </Route>
      </Switch>
  );
}

