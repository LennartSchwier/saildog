import React from 'react';
import styled from "styled-components/macro";

export default function Buttons({labelButtonOne, labelButtonTwo, labelButtonThree, lableButtonFour,
                                    disableButtonOne = true, disableButtonTwo = true, disableButtonThree = true, disableButtonFour = true,
                                clickHandlerOne, clickHandlerTwo, clickHandlerThree, clickHandlerFour}) {
    return (
        <ButtonGroupStyled>
            <ButtonStyled disabled={disableButtonOne} onClick={clickHandlerOne}>{labelButtonOne}</ButtonStyled>
            <ButtonStyled disabled={disableButtonTwo} onClick={clickHandlerTwo}>{labelButtonTwo}</ButtonStyled>
            <ButtonStyled disabled={disableButtonThree} onClick={clickHandlerThree}>{labelButtonThree}</ButtonStyled>
            <ButtonStyled disabled={disableButtonFour} onClick={clickHandlerFour}>{lableButtonFour}</ButtonStyled>
        </ButtonGroupStyled>
    );
}

const ButtonGroupStyled = styled.div` 
  display: flex;
  justify-content: space-evenly;
  margin: var(--size-m);
`

const ButtonStyled = styled.button`

  :disabled {
  visibility: hidden;
  }
`


