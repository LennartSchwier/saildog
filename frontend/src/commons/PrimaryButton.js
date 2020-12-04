import React from 'react';
import styled from "styled-components/macro";

export default function PrimaryButton({disableButton = false, labelButton, handleClick}) {
    return (
            <ButtonStyled type={"button"} disabled={disableButton} onClick={handleClick}>{labelButton}</ButtonStyled>
    );
}

const ButtonStyled = styled.button`
border: none;
font-size: 1em;
background-color: Transparent;
    
    :disabled {
    opacity: .2;
    }
    
`


