import React from "react";
import styled from "styled-components/macro";
import Header from "../commons/Header";
import PrimaryButton from "../commons/PrimaryButton";
import {useHistory} from "react-router-dom";

export default function Dashboard({latitude, longitude, errorMessage}) {

    const history = useHistory();

    return (
        <PageLayout>
            <Header headerText={"Ahoi"}/>
            <PositionBlock>
                <section>Current location: {latitude && longitude ? <Bold>Available</Bold> : <Bold>Not Available</Bold>}</section>
                {latitude && longitude ?
                    <div>
                        <div>Latitude: <Bold>{latitude}</Bold></div>
                        <div>Longitude: <Bold>{longitude}</Bold></div>
                    </div>
                    :
                    <div className={"error"}>{errorMessage}</div>
                }
            </PositionBlock>
            <WeatherBlock>
                <section>Current weather: </section>
            </WeatherBlock>
            <div>
                <PrimaryButton labelButton={"Log Out"} />
                <PrimaryButton labelButton={"Input"} handleClick={redirectToInput}/>
            </div>
        </PageLayout>
    );

    function redirectToInput() {
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
  
  .error {
  margin: var(--size-s);
  color: red;
  }
`

const WeatherBlock = styled.div`
margin: 0 var(--size-l);
  
  div {
  margin: var(--size-s);
  }
`

const Bold = styled.span`
font-weight: bold;
`