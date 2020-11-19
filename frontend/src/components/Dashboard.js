import React from "react";
import styled from "styled-components/macro";
import Header from "../commons/Header";
import FootButton from "../commons/FootButton";
import {useHistory} from "react-router-dom";
import usePositioning from "../hooks/usePositioning";

export default function Dashboard() {

    const history = useHistory();

    const [positionAvailable, latitude, longitude, errorMessage] = usePositioning();

    return (
        <PageLayout>
            <Header headerText={"Ahoi 'username'"}/>
            <PositionBlock>
                <section>Current location: {positionAvailable ? <Bold>Available</Bold> : <Bold>Not Available</Bold>}</section>
                {positionAvailable ?
                    <div>
                        <div>Latitude: <Bold>{latitude}</Bold></div>
                        <div>Longitude: <Bold>{longitude}</Bold></div>
                    </div>
                    :
                    <div className={"error"}>{errorMessage}</div>
                }
            </PositionBlock>
            <div>some content</div>
            <div>
                <FootButton labelButton={"Log Out"} />
                <FootButton labelButton={"Input"} handleClick={redirectToInput}/>
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

const Bold = styled.span`
font-weight: bold;
`