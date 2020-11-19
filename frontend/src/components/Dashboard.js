import React from "react";
import styled from "styled-components/macro";
import Header from "../commons/Header";
import Buttons from "../commons/Buttons";
import {useHistory} from "react-router-dom";
import usePositioning from "../hooks/usePositioning";

export default function Dashboard() {

    const history = useHistory();

    const [positionAvailable, latitude, longitude, errorMessage] = usePositioning();

    return (
        <PageLayout>
            <Header headerText={"Ahoi 'username'"}/>
            <PositionBlock>
                <div>Current location: {positionAvailable ? <b>Available</b> : <b>Not Available</b>}</div>
                {positionAvailable ?
                    <div>
                        <div>Latitude: <b>{latitude}</b></div>
                        <div>Longitude: <b>{longitude}</b></div>
                    </div>
                    :
                    <div id={"error"}>{errorMessage}</div>
                }
            </PositionBlock>
            <div>some content</div>
            <Buttons
                disableButtonOne={false}
                labelButtonOne={"Log Out"}
                disableButtonThree={false}
                labelButtonThree={"Input"}
                clickHandlerThree={clickHandlerInput}
            />
        </PageLayout>
    );

    function clickHandlerInput() {
        history.push("/input");
    }
}

const PageLayout = styled.div`
display: grid;
grid-template-rows: 60px 80px 1fr 60px;
row-gap: var(--size-m);
height: 100vh;
`

const PositionBlock = styled.div`
margin: 0 var(--size-l);

  div {
  margin: var(--size-s);
  }
  
  #error {
  margin: var(--size-s);
  color: red;
  }
`