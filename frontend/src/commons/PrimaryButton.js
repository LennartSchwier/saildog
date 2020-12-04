import React from 'react';
import styled from "styled-components/macro";

export default function PrimaryButton({disableButton = false, labelButton, handleClick, icon}) {
    return (
            <ButtonStyled type={"button"} disabled={disableButton} onClick={handleClick}>
                {icon}
                {labelButton}
            </ButtonStyled>
    );
}

const ButtonStyled = styled.button`
border: none;
font-size: 1em;
background-color: Transparent;
display: grid;
justify-items: center;
    
    :disabled {
    opacity: .2;
    }
    
`


