import React, {useState} from 'react';
import {getJwtToken} from "../../service/LoginService";
import styled from "styled-components/macro";
import Header from "../../commons/Header";
import PrimaryButton from "../../commons/PrimaryButton";
import { useHistory } from 'react-router-dom';

export default function Login({loginData, setLoginData}) {

    const history = useHistory();
    const [errorMessage, setErrorMessage] = useState('');

    return(
        <PageLayout>
            <Header headerText={"Log In"}/>
            <FormStyled>
                <label htmlFor={"username"}>Username:</label>
                <input value={loginData.username} name={"username"}
                       onChange={updateLoginData} type={"text"}
                />
                <label htmlFor={"password"}>Password:</label>
                <input value={loginData.password} name={"password"}
                       onChange={updateLoginData} type={"password"}
                />
                <PrimaryButton labelButton={"Log in"} handleClick={login}
                               disableButton={!loginData.username || !loginData.password}
                />
            </FormStyled>
            {errorMessage && <p>{errorMessage}</p>}
        </PageLayout>
    );

    function updateLoginData(event) {
        setLoginData({...loginData, [event.target.name]: event.target.value})
    }

    function login() {
        getJwtToken(loginData)
            .then(data => localStorage.setItem("jwtToken", data))
            .then(() => history.push("/dashboard"))
            .then(() => setLoginData(""))
            .catch(() => setErrorMessage('Wrong username or password'));
    }
}

const PageLayout = styled.div`
display: grid;
grid-template-rows: 60px min-content 60px ;
justify-content: center;
row-gap: var(--size-xl);
height: 100vh;

  p {
  color: darkred;
  font-weight: bold;
  }
`

const FormStyled = styled.form`
display: grid;
grid-template-rows: 1fr 1fr 1fr 1fr 40px;
justify-content: center;
row-gap: var(--size-m);
`