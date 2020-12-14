import React from 'react';
import styled from 'styled-components/macro';

export default function RouteName({ newRoute, setNewRoute }) {
  return (
    <BlockStyled>
      <NameFieldStyled>
        <Bold className={'firstHeader'}>Name</Bold>
        <input
          type={'text'}
          value={newRoute.routeName}
          onChange={(event) =>
            setNewRoute({ ...newRoute, routeName: event.target.value })
          }
        />
      </NameFieldStyled>
    </BlockStyled>
  );
}

const BlockStyled = styled.section`
  display: grid;
  row-gap: var(--size-m);
`;

const NameFieldStyled = styled.div`
  display: flex;
  justify-content: space-evenly;

  p {
    margin: 0;
  }
`;

const Bold = styled.header`
  font-weight: bold;
  margin-left: var(--size-m);
`;
