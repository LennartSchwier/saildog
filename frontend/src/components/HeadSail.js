import React from 'react';
import {getHeadSailTrim} from "../service/TrimDataService";

export default function HeadSail() {
    return (
        <div>
            {getHeadSailTrim()}
        </div>
    );
}