import React from "react";
import Header from "../commons/Header";
import styled from "styled-components/macro";
import Buttons from "../commons/Buttons";
import { useHistory } from 'react-router-dom';

export default function Input({course, setCourse, windSpeed, setWindSpeed, waveHeight, setWaveHeight}) {

    const history = useHistory();

    return (
        <PageLayout>
            <Header headerText={'Input'}/>
            <FormStyled>
                <InputStyled>
                    <div>Course :</div>
                    <div>
                        <input type={"radio"} name={"course"} id={"closed_hauled"} value={"closed_hauled"}
                               checked={course === "closed_hauled"}
                               onClick={handleRadioButton}
                        />
                        <label htmlFor={"closed_hauled"}>Closed Hauled</label>
                    </div>
                    <div>
                        <input type={"radio"} name={"course"} id={"beam_reach"} value={"beam_reach"}
                               checked={course === "beam_reach"}
                               onChange={handleRadioButton}
                        />
                        <label htmlFor={"beam_reach"}>Beam Reach</label>
                    </div>
                    <div>
                        <input type={"radio"} name={"course"} id={"wind_astern"} value={"wind_astern"}
                               checked={course === "wind_astern"}
                               onChange={handleRadioButton}
                        />
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
            </FormStyled>
            <Buttons disableButtonOne={false} disableButtonTwo={!windSpeed && !waveHeight && !course}
                     disableButtonThree={disableHandler()} disableButtonFour={disableHandler()}
                     labelButtonOne={"Dashboard"} labelButtonTwo={"Reset"} labelButtonThree={"Main Sail"} lableButtonFour={"Head Sail"}
                     clickHandlerOne={clickHandlerDashboard}
                     clickHandlerTwo={clickHandlerReset}
                     clickHandlerThree={clickHandlerMainSail}
                     clickHandlerFour={clickHandlerHeadSail}
            />
        </PageLayout>
    );

    function handleRadioButton(event) {
        setCourse(event.target.value)
    }

    function clickHandlerDashboard() {
        history.push("/dashboard");
    }

    function disableHandler() {
        return !(course && windSpeed && waveHeight && windSpeed !== 0 && waveHeight !== 0);
    }

    function clickHandlerMainSail() {
        history.push("/mainsail");
    }

    function clickHandlerReset() {
        setCourse(null);
        setWindSpeed(0);
        setWaveHeight(0);
    }

    function clickHandlerHeadSail() {
        history.push("/headsail");
    }
}

const PageLayout = styled.div`
display: grid;
grid-template-rows: 60px 1fr 60px;
height: 100vh;
`

const FormStyled = styled.form`
`

const InputStyled = styled.div`
display: grid;
row-gap: var(--size-s);
margin: var(--size-m);

  & label{
  font-weight: bold;
  }
`
