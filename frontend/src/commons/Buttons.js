import React from 'react';
import styled from "styled-components/macro";
import Button from "@material-ui/core/Button";
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default function Buttons({labelButtonOne, labelButtonTwo, labelButtonThree, lableButtonFour,
                                    disableButtonOne = true, disableButtonTwo = true, disableButtonThree = true, disableButtonFour = true,
                                clickHandlerOne, clickHandlerTwo, clickHandlerThree, clickHandlerFour}) {
    return (
        <ButtonGroupStyled variant="text" color="primary" aria-label="text primary button group">
            <Button disabled={disableButtonOne} onClick={clickHandlerOne}>{labelButtonOne}</Button>
            <Button disabled={disableButtonTwo} onClick={clickHandlerTwo}>{labelButtonTwo}</Button>
            <Button disabled={disableButtonThree} onClick={clickHandlerThree}>{labelButtonThree}</Button>
            <Button disabled={disableButtonFour} onClick={clickHandlerFour}>{lableButtonFour}</Button>
        </ButtonGroupStyled>
    );
}

const ButtonGroupStyled = styled(ButtonGroup)` 
  display: flex;
  justify-content: center;
  margin: var(--size-m);
`
