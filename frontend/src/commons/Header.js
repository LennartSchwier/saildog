import React from 'react';
import styled from "styled-components/macro";

export default function Header({headerText}) {

    return(
        <HeaderStyled>
            <h2>{headerText}</h2>
        </HeaderStyled>
    );
}

const HeaderStyled = styled.div`
  display: flex;
  justify-content: center;
`