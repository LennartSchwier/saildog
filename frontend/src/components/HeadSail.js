import React from 'react';
import {getHeadSailTrim} from "../service/TrimData";

export default function HeadSail() {
    return (
        <div>
            {getHeadSailTrim()}
        </div>
    );
}