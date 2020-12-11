import React from 'react';
import styled from 'styled-components/macro';

export default function RoutePreview({ legs }) {
  return (
    <>
      <ListStyled>
        {legs.length === 0 ? null : (
          <li>
            <BoldSpan>Start</BoldSpan>
            {legs[0]?.startLatitude} / {legs[0]?.startLongitude}
          </li>
        )}
        {legs?.map((leg, index) =>
          index + 1 === legs.length ? (
            <li key={legs.indexOf(leg)}>
              <BoldSpan>End</BoldSpan>
              {leg.endLatitude} / {leg.endLongitude}
            </li>
          ) : (
            <li key={legs.indexOf(leg)}>
              <BoldSpan>{legs.indexOf(leg) + 1}. Waypoint</BoldSpan>
              {leg.endLatitude} / {leg.endLongitude}
            </li>
          )
        )}
      </ListStyled>
    </>
  );
}

const BoldSpan = styled.span`
  font-weight: bold;
`;

const ListStyled = styled.ul`
  list-style: none;
  margin: var(--size-l);
  padding: 0;
  display: grid;
  row-gap: var(--size-s);

  li {
    display: flex;
    justify-content: space-evenly;
    background-color: Transparent;
    box-shadow: var(--size-xs) var(--size-xs) var(--size-s) dimgrey;
    border-radius: var(--size-m);
    padding: var(--size-s);
  }
`;
