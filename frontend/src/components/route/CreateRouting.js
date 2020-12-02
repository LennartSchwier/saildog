import React, {useState} from "react";
import PrimaryButton from "../../commons/PrimaryButton";
import styled from "styled-components/macro";

export default function CreateRouting() {

    const [newLeg, setNewLeg] = useState({
        startLatitude: "",
        startLongitude: "",
        endLatitude: "",
        endLongitude: ""
    });
    const [legs, setLegs] = useState([]);

    return (
        <>
            <section>
                {legs.length === 0 ?
                    <InputFieldStyled>
                        <BoldHeader className={"header"}>Start</BoldHeader>
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
                    :
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
                        <PrimaryButton labelButton={"Add Waypoint"} handleClick={createRoute}/>
                    </InputFieldStyled>
                }
            </section>
            <ListStyled>
                {legs.length === 0 ? null : <li><BoldSpan>Start</BoldSpan>{legs[0]?.startLatitude} / {legs[0]?.startLongitude}</li>}
                {legs?.map(leg =>
                    legs.indexOf(leg) + 1 === legs.length ?
                    <li><BoldSpan>End</BoldSpan>{leg.endLatitude} / {leg.endLongitude}</li>
                    :
                    <li><BoldSpan>{legs.indexOf(leg) + 1}. Waypoint</BoldSpan>{leg.endLatitude} / {leg.endLongitude}</li>
                )}
            </ListStyled>
        </>
    );

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

const BoldSpan = styled.span`
font-weight: bold;
`

const ListStyled = styled.ul`
list-style: none;
padding: 0;
display: grid;
row-gap: var(--size-s);

  li {
  display: flex;
  justify-content: space-evenly;
  background-color: Transparent;
  box-shadow: var(--size-xs) var(--size-xs) var(--size-s) dimgrey;
  border-radius: var(--size-m);
  padding: var(--size-s);
  }
`
