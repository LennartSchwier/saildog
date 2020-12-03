import React, {useState} from "react";
import PrimaryButton from "../../commons/PrimaryButton";
import styled from "styled-components/macro";

export default function RouteName({ newRoute, setNewRoute }) {

    const [name, setName] = useState("");

    if (newRoute.routeName) {
        return (
            <>
                <NameFieldStyled>
                    <BoldHeader className={"firstHeader"}>Name</BoldHeader>
                    <div>{newRoute.routeName}</div>
                </NameFieldStyled>
                <PrimaryButton labelButton={"Edit"} handleClick={editRouteName}/>
            </>
        );
    }
    if (!newRoute.routeName) {
        return (
            <>
                <NameFieldStyled>
                    <BoldHeader className={"firstHeader"}>Name</BoldHeader>
                    <input type={"text"} value={name}
                           onChange={event => setName(event.target.value)}/>
                </NameFieldStyled>
                <PrimaryButton labelButton={"Save"} handleClick={setRouteName} disableButton={!name}/>
            </>
        );
    }

    function editRouteName() {
        setNewRoute({...newRoute, routeName: ""})
    }

    function setRouteName() {
        setNewRoute({...newRoute, routeName: name})
    }
}

const NameFieldStyled = styled.section`
display: flex;
justify-content: space-evenly;
`

const BoldHeader = styled.header`
font-weight: bold;
margin-left: var(--size-m);
`