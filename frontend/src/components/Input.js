import React from "react";
import Header from "../commons/Header";
import styled from "styled-components/macro";
import FootButton from "../commons/FootButton";
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
            <div>
                <FootButton labelButton={"Dashboard"} handleClick={redirectToDashboard}/>
                <FootButton labelButton={"Reset"} handleClick={resetAllInputData} disableButton={!windSpeed && !waveHeight && !course}/>
                <FootButton labelButton={"Main Sail"} handleClick={redirectToMainSail} disableButton={disableHandler()}/>
                <FootButton labelButton={"Head Sail"} handleClick={redirectToHeadSail} disableButton={disableHandler()}/>
            </div>
        </PageLayout>
    );

    function handleRadioButton(event) {
        setCourse(event.target.value)
    }

    function redirectToDashboard() {
        history.push("/dashboard");
    }

    function disableHandler() {
        return !(course && windSpeed && waveHeight && windSpeed !== 0 && waveHeight !== 0);
    }

    function redirectToMainSail() {
        history.push("/mainsail");
    }

    function resetAllInputData() {
        setCourse(null);
        setWindSpeed(0);
        setWaveHeight(0);
    }

    function redirectToHeadSail() {
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
