import React from 'react';
import styled from 'styled-components/macro';

export default function Leg({ leg, index }) {
  const header = index === 0 ? 'Start' : `${index}. Waypoint`;

  return (
    <>
      <WaypointStyled>
        <Bold>{header}</Bold>
        <p>
          {leg?.startWaypoint.latitude} / {leg?.startWaypoint.longitude}
        </p>
      </WaypointStyled>
      <LegInfoStyled>
        <p>{leg.distance} nm</p>
        <p>{leg.bearing} °</p>
      </LegInfoStyled>
    </>
  );
}

const WaypointStyled = styled.section`
  margin: 0 var(--size-l);
  height: 44px;
  background-color: Transparent;
  box-shadow: var(--size-xs) var(--size-xs) var(--size-s) dimgrey;
  border-radius: var(--size-m);
  padding: var(--size-m);
  display: flex;
  justify-content: space-evenly;
  row-gap: var(--size-s);
  backdrop-filter: blur(var(--size-xxs));

  p {
    margin: 0;
  }
`;

const LegInfoStyled = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;
  row-gap: var(--size-xs);
  margin-left: var(--size-xxl);

  p {
    margin: 0;
  }
`;

const Bold = styled.header`
  font-weight: bold;
`;
