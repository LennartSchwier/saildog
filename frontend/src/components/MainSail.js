import {useHistory} from "react-router-dom";
import useTrimData from "../hooks/useTrimData";
import Header from "../commons/Header";
import Buttons from "../commons/Buttons";
import styled from "styled-components/macro";
import React from "react";

export default function MainSail({course, windSpeed, waveHeight}) {

    const history = useHistory();
    const mainSailTrimData = useTrimData(course, windSpeed, waveHeight).mainSailTrimData;

    const getTextualOutput = (input) => input.replace("_", " ").toLowerCase()

    return (
        <PageLayout>
            <Header headerText={'Main Sail'}/>
            <DataField>
                <p>Sheet: {mainSailTrimData && getTextualOutput(mainSailTrimData.mainSailSheet)}</p>
                <p>Traveller: {mainSailTrimData && getTextualOutput(mainSailTrimData.traveller)}</p>
                <p>Boom Vang: {mainSailTrimData && getTextualOutput(mainSailTrimData.boomVang)}</p>
                <p>Luff: {mainSailTrimData && getTextualOutput(mainSailTrimData.mainSailLuff)}</p>
                <p>Foot: {mainSailTrimData && getTextualOutput(mainSailTrimData.mainSailFoot)}</p>
            </DataField>
            <Buttons
                disableButtonTwo={false}
                labelButtonTwo={"Back"}
                clickHandlerTwo={clickHandlerBack}
            />
        </PageLayout>
    );

    function clickHandlerBack() {
        history.push("/dashboard");
    }
}


const PageLayout = styled.div`
display: grid;
grid-template-rows: 60px 1fr 60px;
height: 100vh;
`

const DataField = styled.div`
margin: var(--size-m);
`