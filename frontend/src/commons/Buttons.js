import React from 'react';
import styled from "styled-components/macro";
import Button from "@material-ui/core/Button";
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default function Buttons({labelButtonOne, labelButtonTwo, labelButtonThree,
                                    disableButtonOne = true, disableButtonTwo = true, disableButtonThree = true,
                                clickHandlerOne, clickHandlerTwo, clickHandlerThree}) {
    return (
        <ButtonGroupStyled variant="text" color="primary" aria-label="text primary button group">
            <Button disabled={disableButtonOne} onClick={clickHandlerOne}>{labelButtonOne}</Button>
            <Button disabled={disableButtonTwo} onClick={clickHandlerTwo}>{labelButtonTwo}</Button>
            <Button disabled={disableButtonThree} onClick={clickHandlerThree}>{labelButtonThree}</Button>
        </ButtonGroupStyled>
    );
}

const ButtonGroupStyled = styled(ButtonGroup)` 
  display: flex;
  justify-content: center;
  margin: var(--size-m);
`
