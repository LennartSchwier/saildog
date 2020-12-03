import React from "react";
import {IconContext} from "react-icons";

export default function IconContextProvider({ children }) {

    return (
        <IconContext.Provider value={{ size: "1.5em" }}>
            {children}
        </IconContext.Provider>
    );
}