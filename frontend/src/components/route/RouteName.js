import React, {useState} from "react";
import PrimaryButton from "../../commons/PrimaryButton";
import styled from "styled-components/macro";

export default function RouteName({ newRoute, setNewRoute }) {

    const [name, setName] = useState("");

    if (newRoute.routeName) {
        return (
            <BlockStyled>
                <NameFieldStyled>
                    <Bold className={"firstHeader"}>Name</Bold>
                    <p>{newRoute.routeName}</p>
                </NameFieldStyled>
                <PrimaryButton labelButton={"Edit"} handleClick={editRouteName}/>
            </BlockStyled>
        );
    }
    if (!newRoute.routeName) {
        return (
            <BlockStyled>
                <NameFieldStyled>
                    <Bold className={"firstHeader"}>Name</Bold>
                    <input type={"text"} value={name}
                           onChange={event => setName(event.target.value)}/>
                </NameFieldStyled>
                <PrimaryButton labelButton={"Save"} handleClick={setRouteName} disableButton={!name}/>
            </BlockStyled>
        );
    }

    function editRouteName() {
        setNewRoute({...newRoute, routeName: ""})
    }

    function setRouteName() {
        setNewRoute({...newRoute, routeName: name})
    }
}

const BlockStyled = styled.section`
display: grid;
row-gap: var(--size-m);
`

const NameFieldStyled = styled.div`
display: flex;
justify-content: space-evenly;

  p {
  margin: 0;
  }
`

const Bold = styled.header`
font-weight: bold;
margin-left: var(--size-m);
`