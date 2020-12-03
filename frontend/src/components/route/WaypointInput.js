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
                    <BoldHeader className={"header"}>Start of Route</BoldHeader>
                    <InputLineStyled>Latitude
                        <input type={"text"} name={"startLatitude"} value={newLeg.startLatitude}
                               onChange={changeHandler}
                        />
                    </InputLineStyled>
                    <InputLineStyled>Longitude
                        <input type={"text"} name={"startLongitude"} value={newLeg.startLongitude}
                               onChange={changeHandler}
                        />
                    </InputLineStyled>
                    <BoldHeader>End/1. Waypoint</BoldHeader>
                    <InputLineStyled>Latitude
                        <input type={"text"} name={"endLatitude"} value={newLeg.endLatitude}
                               onChange={changeHandler}
                        />
                    </InputLineStyled>
                    <InputLineStyled>Longitude
                        <input type={"text"} name={"endLongitude"} value={newLeg.endLongitude}
                               onChange={changeHandler}
                        />
                    </InputLineStyled>
                    <PrimaryButton labelButton={"Create Leg"} handleClick={createRoute}/>
                </InputFieldStyled>
            </>
        );
    }
    if (legs.length !== 0) {
        return (
            <>
                <InputFieldStyled>
                    <InputLineStyled>Latitude
                        <input type={"text"} name={"endLatitude"} value={newLeg.endLatitude}
                               onChange={changeHandler}
                        />
                    </InputLineStyled>
                    <InputLineStyled>Longitude
                        <input type={"text"} name={"endLongitude"} value={newLeg.endLongitude}
                               onChange={changeHandler}
                        />
                    </InputLineStyled>
                    <PrimaryButton labelButton={"Add Leg"} handleClick={createRoute}/>
                </InputFieldStyled>
            </>
        );
    }

    function changeHandler(event) {
        setNewLeg({...newLeg, [event.target.name]: event.target.value});
    }

    function createRoute() {
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
`

const InputLineStyled = styled.label`
display: flex;
justify-content: space-evenly;
`

const BoldHeader = styled.header`
font-weight: bold;
margin-left: var(--size-m);
`