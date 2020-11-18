import React from 'react';
import styled from "styled-components/macro";
import Button from "@material-ui/core/Button";
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default function Buttons({labelButtonOne, labelButtonTwo, labelButtonThree,
                                        disableButtonOne = true, disableButtonTwo = true, disableButtonThree = true}) {
    return (
        <ButtonGroupStyled variant="text" color="primary" aria-label="text primary button group">
            <Button disabled={disableButtonOne}>{labelButtonOne}</Button>
            <Button disabled={disableButtonTwo}>{labelButtonTwo}</Button>
            <Button disabled={disableButtonThree}>{labelButtonThree}</Button>
        </ButtonGroupStyled>
    );
}

const ButtonGroupStyled = styled(ButtonGroup)`
  display: flex;
  justify-content: center;
  margin: var(--size-m);
`
