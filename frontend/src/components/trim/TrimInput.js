import React, {useContext} from "react";
import Header from "../../commons/Header";
import styled from "styled-components/macro";
import PrimaryButton from "../../commons/PrimaryButton";
import { useHistory } from 'react-router-dom';
import {getStormGlassWeather} from "../../service/StormGlassService";
import WeatherDataContext from "../../contexts/WeatherDataContext";
import {MdDashboard, RiSailboatFill, RiSailboatLine} from "react-icons/all";
import ButtonGroupStyles from "../../commons/ButtonGroupStyles";

export default function TrimInput({course, setCourse, latitude, longitude}) {

    const history = useHistory();
    const { refactoredWeatherData, setRefactoredWeatherData } = useContext(WeatherDataContext)

    return (
        <PageLayout>
            <Header headerText={'Sail Trim'}/>
            <FormStyled>
                <FieldsetStyled>
                    <legend>Course</legend>
                    <div>
                        <input type={"radio"} name={"course"} id={"closed_hauled"} value={"closed_hauled"}
                               checked={course === "closed_hauled"}
                               onChange={handleRadioButton}
                        />
                        <label htmlFor={"closed_hauled"}>Closed Hauled</label>
                    </div>
                    <div>
                        <input type={"radio"} name={"course"} id={"beam_reach"} value={"beam_reach"}
                               checked={course === "beam_reach"}
                               onChange={handleRadioButton}
                        />
                        <label htmlFor={"beam_reach"}>Beam Reach</label>
                    </div>
                    <div>
                        <input type={"radio"} name={"course"} id={"wind_astern"} value={"wind_astern"}
                               checked={course === "wind_astern"}
                               onChange={handleRadioButton}
                        />
                        <label htmlFor={"wind_astern"}>Wind Astern</label>
                    </div>
                </FieldsetStyled>
                <FieldsetStyled>
                    <legend>Weather</legend>
                    <label htmlFor={"windSpeed"}>Wind Speed :</label>
                    <input type={"range"} max={"40"} id={"windSpeed"} name={"windSpeed"}
                           value={refactoredWeatherData.windSpeed} onChange={handleSliderChange}
                    />
                    <output>{refactoredWeatherData.windSpeed} knots</output>
                    <label htmlFor={"waveHeight"}>Wave Height :</label>
                    <input type={"range"} max={"3"} step={"0.1"} id={"waveHeight"} name={"waveHeight"}
                           value={refactoredWeatherData.waveHeight} onChange={handleSliderChange}
                    />
                    <output>{refactoredWeatherData.waveHeight} meter</output>
                </FieldsetStyled>
                <PrimaryButton labelButton={"Load weather for current location"}
                               handleClick={loadWeather} disableButton={!latitude || !longitude}
                />
                <PrimaryButton labelButton={"Reset"} handleClick={resetAllInputData}
                               disableButton={!refactoredWeatherData.windSpeed && !refactoredWeatherData.waveHeight && !course}
                />
            </FormStyled>
            <ButtonGroup>
                <PrimaryButton labelButton={"Dashboard"} handleClick={redirectToDashboard} icon={<MdDashboard/>}/>
                <PrimaryButton labelButton={"Main Sail"} handleClick={redirectToMainSail} disableButton={disableHandler()} icon={<RiSailboatFill/>}/>
                <PrimaryButton labelButton={"Head Sail"} handleClick={redirectToHeadSail} disableButton={disableHandler()} icon={<RiSailboatLine/>}/>
            </ButtonGroup>
        </PageLayout>
    );

    function handleRadioButton(event) {
        setCourse(event.target.value);
    }

    function handleSliderChange(event) {
        setRefactoredWeatherData({...refactoredWeatherData, [event.target.name]: event.target.value})
    }

    function loadWeather() {
        getStormGlassWeather(latitude, longitude)
            .then(data => setRefactoredWeatherData({...refactoredWeatherData, windSpeed: Math.ceil(data.windSpeed), waveHeight: data.waveHeight === 999 ?  0 : data.waveHeight}));
    }

    function redirectToDashboard() {
        history.push("/dashboard");
    }

    function disableHandler() {
        return !(course && refactoredWeatherData.windSpeed && refactoredWeatherData.waveHeight && refactoredWeatherData.windSpeed !== 0 && refactoredWeatherData.waveHeight !== 0);
    }

    function redirectToMainSail() {
        history.push("/mainsail");
    }

    function resetAllInputData() {
        setCourse(null);
        setRefactoredWeatherData({...refactoredWeatherData, windSpeed: 0, waveHeight: 0})
    }

    function redirectToHeadSail() {
        history.push("/headsail");
    }
}

const PageLayout = styled.div`
display: grid;
grid-template-rows: 60px 1fr 60px;
height: 100vh;
`

const FormStyled = styled.form`
display: grid;
grid-template-rows: min-content min-content min-content min-content;
`

const FieldsetStyled = styled.fieldset`
display: grid;
grid-template-rows: 0 1fr 1fr 1fr;
row-gap: var(--size-s);
margin: var(--size-m);
border-radius: var(--size-s);
border-color: lightgrey;

  & output, div, legend{
  font-weight: bold;
  }
`

const ButtonGroup = ButtonGroupStyles;
