import React, {useState} from "react";
import PrimaryButton from "../../commons/PrimaryButton";
import styled from "styled-components/macro";

export default function WaypointInput({ legs, setLegs }) {

    const [newLeg, setNewLeg] = useState({
        startLatitude: "",
        startLongitude: "",
        endLatitude: "",
        endLongitude: ""
    });

    if (legs.length === 0) {
        return (
            <>
                <InputFieldStyled>
                    <Bold className={"firstHeader"}>Start of Route</Bold>
                    <input type={"text"} name={"startLatitude"} value={newLeg.startLatitude}
                                   onChange={changeHandler} placeholder={"latitude"}/>
                    <input type={"text"} name={"startLongitude"} value={newLeg.startLongitude}
                               onChange={changeHandler} placeholder={"longitude"}/>
                    <Bold className={"secondHeader"}>End / 1. Waypoint</Bold>
                    <input type={"text"} name={"endLatitude"} value={newLeg.endLatitude}
                               onChange={changeHandler} placeholder={"latitude"}/>
                    <input type={"text"} name={"endLongitude"} value={newLeg.endLongitude}
                               onChange={changeHandler} placeholder={"longitude"}/>
                </InputFieldStyled>
                <PrimaryButton labelButton={"Save"} handleClick={createLeg}/>
            </>
        );
    }
    if (legs.length !== 0) {
        return (
            <>
                <InputFieldStyled>
                    <Bold className={"firstHeader"}>New Leg</Bold>
                    <input type={"text"} name={"endLatitude"} value={newLeg.endLatitude}
                               onChange={changeHandler} placeholder={"latitude"}/>
                    <input type={"text"} name={"endLongitude"} value={newLeg.endLongitude}
                               onChange={changeHandler} placeholder={"longitude"}/>
                </InputFieldStyled>
                <PrimaryButton labelButton={"Add"} handleClick={createLeg}/>
            </>
        );
    }

    function changeHandler(event) {
        setNewLeg({...newLeg, [event.target.name]: event.target.value});
    }

    function createLeg() {
        setLegs([...legs, newLeg]);
        setNewLeg({
            startLatitude: newLeg.endLatitude,
            startLongitude: newLeg.endLongitude,
            endLatitude: "",
            endLongitude: ""
        })
    }
}

const InputFieldStyled = styled.div`
display: grid;
row-gap: var(--size-s);
align-items: center;
justify-items: center;
grid-template-rows: 1fr 1fr ;
grid-auto-rows: 1fr;
grid-template-columns: 1fr 1fr;

  .firstHeader {
  grid-row: 1/3;
  }
  
  .secondHeader {
  grid-row: 3/5;
  }
`

const Bold = styled.header`
font-weight: bold;
margin-left: var(--size-m);
`