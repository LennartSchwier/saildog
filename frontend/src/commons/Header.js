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
box-shadow: 0 5px 13px -5px grey;
  
  h1 {
  margin-left: var(--size-xl);
  var(--theme-mid);
  }
`