import React from "react";
import styled from "styled-components/macro";

export default function Leg({ leg, index }) {

    const header = index === 0 ? "Start" : `${index}. Waypoint`;

    return (
        <>
            <WaypointStyled>
                <Bold>{header}</Bold>
                <div>{leg?.startWaypoint.latitude} / {leg?.startWaypoint.longitude}</div>
            </WaypointStyled>
            <LegInfoStyled>
                <div>{leg.distance} nm</div>
                <div>{leg.bearing} °</div>
            </LegInfoStyled>
        </>
    );
}

const WaypointStyled = styled.div`
margin: 0 var(--size-l);
background-color: Transparent;
box-shadow: var(--size-xs) var(--size-xs) var(--size-s) dimgrey;
border-radius: var(--size-m);
padding: var(--size-m);
display: flex;
justify-content: space-evenly;
row-gap: var(--size-s);
`

const LegInfoStyled = styled.div`
display: grid;
grid-template-rows: 1fr 1fr;
row-gap: var(--size-xs);
margin-left: var(--size-xxl);
`

const Bold = styled.span`
font-weight: bold;
`