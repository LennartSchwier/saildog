import React from "react";

export default function Route({route}) {

    return (
        <ul>
            {route.legs.map(leg =>
                <li key={leg.legId}>
                    <div>
                        start : {leg.startWaypoint.latitude} / {leg.startWaypoint.longitude}
                    </div>
                    <div>
                        end : {leg.endWaypoint.latitude} / {leg.endWaypoint.longitude}
                    </div>
                    <div>
                        distance: {Math.round((leg.distance + Number.EPSILON) * 100) / 100} nm
                    </div>
                    <div>
                        bearing: {leg.bearing} °
                    </div>
                </li>
            )}
        </ul>
    );
}