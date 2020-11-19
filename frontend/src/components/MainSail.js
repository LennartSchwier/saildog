import {useHistory} from "react-router-dom";
import useTrimData from "../hooks/useTrimData";
import Header from "../commons/Header";
import Buttons from "../commons/Buttons";
import styled from "styled-components/macro";
import React from "react";

export default function MainSail({course, windSpeed, waveHeight}) {

    const history = useHistory();
    const mainSailTrimData = useTrimData(course, windSpeed, waveHeight).mainSailTrimData;

    const getTextualOutput = (input) => input?.replace("_", " ").toLowerCase()

    return (
        <PageLayout>
            <Header headerText={'Main Sail'}/>
            <InputField>
                <div>
                    <div>Course:</div>
                    <span>{getTextualOutput(course)}</span>
                </div>
                <div>
                    <div>Wind Speed:</div>
                    <span>{windSpeed} knots</span>
                </div>
                <div>
                    <div>Wave Height:</div>
                    <span>{waveHeight} meter</span>
                </div>
            </InputField>
            <OutputField>
                <div>
                    <div>Sheet:</div>
                    <span>{mainSailTrimData && getTextualOutput(mainSailTrimData.mainSailSheet)}</span>
                </div>
                <div>
                    <div>Traveller:</div>
                    <span>{mainSailTrimData && getTextualOutput(mainSailTrimData.traveller)}</span>
                </div>
                <div>
                    <div>Boom Vang:</div>
                    <span>{mainSailTrimData && getTextualOutput(mainSailTrimData.boomVang)}</span>
                </div>
                <div>
                    <div>Luff:</div>
                    <span>{mainSailTrimData && getTextualOutput(mainSailTrimData.mainSailLuff)}</span>
                </div>
                <div>
                    <div>Foot:</div>
                    <span>{mainSailTrimData && getTextualOutput(mainSailTrimData.mainSailFoot)}</span>
                </div>
            </OutputField>
            <Buttons
                disableButtonTwo={false}
                labelButtonTwo={"Back"}
                clickHandlerTwo={clickHandlerBack}
            />
        </PageLayout>
    );

    function clickHandlerBack() {
        history.push("/input");
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

  div > div {
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
  
  div > div {
  font-weight: bold;
  }
`