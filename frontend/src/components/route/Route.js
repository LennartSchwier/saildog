import React from 'react';
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export default function Route({ route }) {
  return (
    <LinkStyled to={`/routedetails/${route.routeId}`}>
      <RouteStyled>
        <Bold>{route.routeName}</Bold>
        <div>Number of legs : {route.legs.length}</div>
        <div>Total distance: {route.totalDistance} nm</div>
      </RouteStyled>
    </LinkStyled>
  );
}

const LinkStyled = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

const RouteStyled = styled.div`
  margin: 0 var(--size-l);
  background-color: Transparent;
  box-shadow: var(--boxshadow);
  border-radius: var(--size-m);
  padding: var(--size-m);
  display: grid;
  grid-template-rows: 1.5fr 1fr 1fr;
  row-gap: var(--size-s);
  backdrop-filter: blur(var(--size-xxs));
`;

const Bold = styled.span`
  font-weight: bold;
  margin-left: var(--size-m);
`
