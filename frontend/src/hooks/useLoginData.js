import {useState} from "react";

export default function useLoginData() {

    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });
    const [jwtToken, setJwtToken] = useState("");

    return [loginData, setLoginData, jwtToken, setJwtToken];
}