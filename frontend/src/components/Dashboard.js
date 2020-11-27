import React, {useContext} from "react";
import styled from "styled-components/macro";
import Header from "../commons/Header";
import PrimaryButton from "../commons/PrimaryButton";
import {useHistory} from "react-router-dom";
import WeatherDataContext from "../contexts/WeatherDataContext";

export default function Dashboard({latitude, longitude, errorMessage}) {

    const history = useHistory();
    const {weatherData} = useContext(WeatherDataContext);

    return (
        <PageLayout>
            <Header headerText={"Ahoi 'test user'"}/>
            <DashboardBlock>
                <section>Current location:</section>
                {latitude && longitude ?
                    <div>
                        <div>Latitude: <Bold>{latitude}</Bold></div>
                        <div>Longitude: <Bold>{longitude}</Bold></div>
                    </div>
                    :
                    errorMessage ?
                        <div className={"error"}>{errorMessage}</div>
                        :
                        <div>Searching position...</div>
                }
            </DashboardBlock>
            <DashboardBlock>
                <section>Current weather report: </section>
                {weatherData ?
                    <div>
                        <div>Time: {weatherData.time} </div>
                        <div>Air temperature: <Bold>{weatherData.airTemperature}</Bold> °C</div>
                        <div>Water temperature: <Bold>{weatherData.waterTemperature}</Bold> °C</div>
                        <div>Pressure: <Bold>{weatherData.pressure}</Bold> hPa</div>
                        <div>Visibility: <Bold>{weatherData.visibility}</Bold> km</div>
                        <div>Wind: <Bold>{weatherData.windDirection}</Bold>° / <Bold>{weatherData.windSpeed}</Bold> kts</div>
                        {weatherData.currentDirection !== 999 && weatherData.currentSpeed !== 999 &&
                            <div>Current: <Bold>{weatherData.currentDirection}</Bold>° / <Bold>{weatherData.currentSpeed}</Bold> kts</div>
                        }
                        {weatherData.waveDirection !== 999 && weatherData.waveHeight !== 999 &&
                            <div>Wave: <Bold>{weatherData.waveDirection}</Bold>° / <Bold>{weatherData.waveHeight}</Bold> meter</div>
                        }
                    </div>
                    :
                    <div>no weather data available</div>
                }
            </DashboardBlock>
            <ButtonGroup>
                <PrimaryButton labelButton={"Log Out"} />
                <PrimaryButton labelButton={"Trim Input"} handleClick={redirectToTrimInput}/>
            </ButtonGroup>
        </PageLayout>
    );

    function redirectToTrimInput() {
        history.push("/triminput");
    }
}

const PageLayout = styled.div`
display: grid;
grid-template-rows: 60px min-content min-content 60px;
row-gap: var(--size-xl);
height: 100vh;
`

const DashboardBlock = styled.div`
margin: 0 var(--size-l);
background-color: Transparent;
box-shadow: var(--size-xs) var(--size-xs) var(--size-s) dimgrey;
border-radius: var(--size-m);
padding: var(--size-m);

  section {
  margin-bottom: var(--size-l);
  }

  div {
  display: grid;
  row-gap: var(--size-m);
  margin: 0 var(--size-m);
  }
  
  div > div {
  display: flex;
  }
  
  .error {
  margin: var(--size-s);
  color: red;
  }
`

const Bold = styled.span`
font-weight: bold;
margin: 0 var(--size-m);
`

const ButtonGroup = styled.div`
position: fixed;
bottom: 24px;
`