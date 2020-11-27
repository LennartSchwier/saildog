import React, {useContext} from 'react';
import Header from "../commons/Header";
import PrimaryButton from "../commons/PrimaryButton";
import styled from "styled-components/macro";
import {useHistory} from "react-router-dom";
import useTrimData from "../hooks/useTrimData";
import WeatherDataContext from "../contexts/WeatherDataContext";

export default function HeadSail({course}) {

    const history = useHistory();
    const {weatherData} = useContext(WeatherDataContext);
    const { headSailTrimData } = useTrimData(course, weatherData.windSpeed, weatherData.waveHeight);

    const getTextualOutput = (input) => input?.replace("_", " ").toLowerCase()

    return (
        <PageLayout>
            <Header headerText={'Head Sail'}/>
            <InputField>
                <div>
                    <div>Course:</div>
                    <Bold>{getTextualOutput(course)}</Bold>
                </div>
                <div>
                    <div>Wind Speed:</div>
                    <Bold>{weatherData.windSpeed} knots</Bold>
                </div>
                <div>
                    <div>Wave Height:</div>
                    <Bold>{weatherData.waveHeight} meter</Bold>
                </div>
            </InputField>
            <OutputField>
                <div>
                    <div>Sheet:</div>
                    {headSailTrimData && <Bold>{getTextualOutput(headSailTrimData.headSailSheet)}</Bold>}
                </div>
                <div>
                    <div>Fair Lead:</div>
                    {headSailTrimData && <Bold>{getTextualOutput(headSailTrimData.headSailLead)}</Bold>}
                </div>
                <div>
                    <div>Luff:</div>
                    {headSailTrimData && <Bold>{getTextualOutput(headSailTrimData.headSailLuff)}</Bold>}
                </div>
            </OutputField>
            <div>
                <PrimaryButton labelButton={"Back"} handleClick={redirectToInput}/>
            </div>
        </PageLayout>
    );

    function redirectToInput() {
        history.push("/triminput");
    }
}


const PageLayout = styled.div`
display: grid;
grid-template-rows: 60px 1fr 6fr 60px;
row-gap: var(--size-xl);
height: 100vh;
`

const InputField = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
font-size: 0.9em;

  div > span {
  font-weight: bold;
  }
`

const OutputField = styled.div`
margin: var(--size-m);
font-size: 1.1em;

  div {
  display: flex;
  align-items: center;
  margin: var(--size-s);
  }
`

const Bold = styled.span`
font-weight: bold;
`