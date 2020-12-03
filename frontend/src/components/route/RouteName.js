import React, {useState} from "react";
import PrimaryButton from "../../commons/PrimaryButton";
import styled from "styled-components/macro";

export default function RouteName({ newRoute, setNewRoute }) {

    const [name, setName] = useState("");

    if (newRoute.routeName) {
        return (
            <NameFieldStyled>
                <div>{newRoute.routeName}</div>
                <PrimaryButton labelButton={"Edit"} handleClick={editRouteName}/>
            </NameFieldStyled>
        );
    }
    if (!newRoute.routeName) {
        return (
            <NameFieldStyled>
                <input type={"text"} value={name}
                       onChange={event => setName(event.target.value)}/>
                <PrimaryButton labelButton={"Save"} handleClick={setRouteName} disableButton={!name}/>
            </NameFieldStyled>
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
display: grid;
`