import React from 'react';
import styled from "styled-components/macro";

export default function FootButton({disableButton = false, labelButton, handleClick}) {
    return (
            <ButtonStyled disabled={disableButton} onClick={handleClick}>{labelButton}</ButtonStyled>
    );
}

const ButtonStyled = styled.button`
`


