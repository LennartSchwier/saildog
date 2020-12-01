import React from "react";
import styled from "styled-components/macro";


export default function Leg({legs, leg}) {

    const index = legs.indexOf(leg);

    return (
        <LegStyled>
            <Bold>{index + 1}. Leg</Bold>
            <div>
                start : {leg.startWaypoint.latitude} / {leg.startWaypoint.longitude}
            </div>
            <div>
                end : {leg.endWaypoint.latitude} / {leg.endWaypoint.longitude}
            </div>
            <div>
                distance: {Math.round((leg.distance + Number.EPSILON) * 100) / 100} nm
            </div>
            <div>
                bearing: {leg.bearing} °
            </div>
        </LegStyled>
    );
}

const LegStyled = styled.div`
margin: 0 var(--size-l);
background-color: Transparent;
box-shadow: var(--size-xs) var(--size-xs) var(--size-s) dimgrey;
border-radius: var(--size-m);
padding: var(--size-m);
display: grid;
grid-template-rows: 1.5fr 1fr 1fr;
row-gap: var(--size-s);
`

const Bold = styled.span`
font-weight: bold;
margin-left: var(--size-m);
`