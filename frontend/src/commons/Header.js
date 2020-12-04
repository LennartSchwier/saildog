import React from 'react';
import styled from "styled-components/macro";

export default function Header({headerText}) {

    return(
        <HeaderStyled>
            <h1>{headerText}</h1>
        </HeaderStyled>
    );
}

const HeaderStyled = styled.section`
  display: flex;
  
  
  h1 {
  margin: var(--size-xl) 0 var(--size-s) var(--size-xl);
  }
`