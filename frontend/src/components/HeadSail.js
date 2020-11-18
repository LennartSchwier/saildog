import React from 'react';
import {getHeadSailTrim} from "../service/TrimDataService";
import Header from "../commons/Header";
import Buttons from "../commons/Buttons";
import styled from "styled-components/macro";

export default function HeadSail() {
    return (
        <PageLayout>
            <Header headerText={'Head Sail'}/>
            {getHeadSailTrim()}
            <div>
                <p>Sheet:</p>
                <p>Fair Lead:</p>
                <p>Luff:</p>
            </div>
            <Buttons
                disableButtonTwo={false}
                labelButtonTwo={"Back"}/>
        </PageLayout>
    );
}

const PageLayout = styled.div`
display: grid;
grid-template-rows: 60px 1fr 60px;
height: 100vh;
`