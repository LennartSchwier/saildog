import React, {useContext} from "react";
import styled from "styled-components/macro";
import WeatherDataContext from "../../contexts/WeatherDataContext";

export default function WeatherBlock() {

    const {weatherData} = useContext(WeatherDataContext);

    if (weatherData) {
        return (
            <StyledDashboardSection>
                <section>Weather report: </section>
                    <div>
                        <div>Time of report:<Bold>{weatherData.time.substring(11, 19)}</Bold><Small>UTC</Small></div>
                        <div>Air temperature:<Bold>{weatherData.airTemperature}</Bold><Small>°C</Small></div>
                        <div>Water temperature:<Bold>{weatherData.waterTemperature}</Bold><Small>°C</Small></div>
                        <div>Pressure:<Bold>{weatherData.pressure}</Bold><Small>hPa</Small></div>
                        <div>Visibility:<Bold>{weatherData.visibility}</Bold><Small>km</Small></div>
                        <div>Wind:<Bold>{weatherData.windDirection}</Bold>°<Bold>{weatherData.windSpeed}</Bold><Small>kts</Small></div>
                        {weatherData.currentDirection !== 999 && weatherData.currentSpeed !== 999 &&
                        <div>Current:<Bold>{weatherData.currentDirection}</Bold>°<Bold>{weatherData.currentSpeed}</Bold><Small>kts</Small></div>
                        }
                        {weatherData.waveDirection !== 999 && weatherData.waveHeight !== 999 &&
                        <div>Wave:<Bold>{weatherData.waveDirection}</Bold>°<Bold>{weatherData.waveHeight}</Bold><Small>m</Small></div>
                        }
                    </div>
            </StyledDashboardSection>
        );
    }
    if (!weatherData) {
        return (
            <StyledDashboardSection>
                <section>Weather report: </section>
                <div>no weather data available</div>
            </StyledDashboardSection>
        );
    }
}

const StyledDashboardSection = styled.section`
margin: 0 var(--size-l);
background-color: Transparent;
box-shadow: 2px 2px var(--size-s) dimgrey;
border-radius: var(--size-m);
padding: var(--size-m);
backdrop-filter: blur(2px);


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
margin-left: var(--size-m);
`

const Small = styled.span`
font-size: 0.8em;
align-self: center;
margin-left: var(--size-xs);
`