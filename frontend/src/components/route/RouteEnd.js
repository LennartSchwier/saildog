import React from "react";
import styled from "styled-components/macro";

export default function EndWaypoint({ endWaypoint }) {
    return (
        <WaypointStyled>
            <Bold>End:</Bold>
            <div>{endWaypoint?.latitude} / {endWaypoint?.longitude}</div>
        </WaypointStyled>
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
backdrop-filter: blur(var(--size-xxs));
`

const Bold = styled.span`
font-weight: bold;
`