import React from 'react';
import HeadSail from "./components/HeadSail";
import {Switch, Route, Redirect} from "react-router-dom";
import Input from "./components/Input";
import useEnvironmentData from "./hooks/useEnvironmentData";
import MainSail from "./components/MainSail";


export default function App() {

    const [course, setCourse, windSpeed, setWindSpeed, waveHeight, setWaveHeight] = useEnvironmentData();

  return (
      <Switch>
          <Route path={"/input"}>
              <Input course={course} setCourse={setCourse}
                         windSpeed={windSpeed} setWindSpeed={setWindSpeed}
                         waveHeight={waveHeight} setWaveHeight={setWaveHeight}
              />
          </Route>
          <Route path={"/headsail"}>
              <HeadSail
                  course={course} windSpeed={windSpeed} waveHeight={waveHeight}
              />
          </Route>
          <Route path={"/mainsail"}>
              <MainSail
                  course={course} windSpeed={windSpeed} waveHeight={waveHeight}
              />
          </Route>
          <Route path={"/"}>
              <Redirect to={"/dashboard"}/>
          </Route>
      </Switch>
  );
}

