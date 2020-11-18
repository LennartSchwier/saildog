import React, {useState} from "react";
import Header from "../commons/Header";
import styled from "styled-components/macro";
import Buttons from "../commons/Buttons";
import { useHistory } from 'react-router-dom';

export default function Dashboard() {

    const [course, setCourse] = useState();
    const [windSpeed, setWindSpeed] = useState(0);
    const [waveHeight, setWaveHeight] = useState(0);
    const history = useHistory();

    return (
        <PageLayout>
            <Header headerText={'Dashboard'}/>
            <form onSubmit={submitHandler}>
                <InputStyled>
                    <div>Course :</div>
                    <div>
                        <input type={"radio"} name={"course"} id={"closed_hauled"} value={course}/>
                        <label htmlFor={"closed_hauled"}>Closed Hauled</label>
                    </div>
                    <div>
                        <input type={"radio"} name={"course"} id={"beam_reach"} value={course}/>
                        <label htmlFor={"beam_reach"}>Beam Reach</label>
                    </div>
                    <div>
                        <input type={"radio"} name={"course"} id={"wind_astern"} value={course}/>
                        <label htmlFor={"wind_astern"}>Wind Astern</label>
                    </div>
                </InputStyled>
                <InputStyled>
                    <div>Wind Speed :</div>
                    <input type={"range"} max={"40"} value={windSpeed} id={"windSpeed"}
                           onChange={event => setWindSpeed(event.target.value)}
                    />
                    <label htmlFor={"windSpeed"}>{windSpeed} knots</label>
                    <div>Wave Height :</div>
                    <input type={"range"} max={"3"} step={"0.1"} value={waveHeight} id={"waveHeight"}
                           onChange={event => setWaveHeight(event.target.value)}
                    />
                    <label htmlFor={"waveHeight"}>{waveHeight} meter</label>
                </InputStyled>
            </form>
            <Buttons disableButtonOne={false} disableButtonTwo={false} disableButtonThree={false}
                     labelButtonOne={"Main Sail"} labelButtonTwo={"Reset"} labelButtonThree={"Head Sail"}
                     clickHandlerThree={clickHandlerHeadSail}
            />
        </PageLayout>
    );

    function submitHandler() {

    }

    function clickHandlerHeadSail() {
        history.push("/headsail")
    }
}

const PageLayout = styled.div`
display: grid;
grid-template-rows: 60px 1fr 60px;
height: 100vh;
`

const InputStyled = styled.div`
display: grid;
row-gap: var(--size-s);
margin: var(--size-m);
`
