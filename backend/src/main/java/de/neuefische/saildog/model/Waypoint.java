package de.neuefische.saildog.model;

import de.neuefische.saildog.enums.TypeOfWaypoint;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Waypoint {

    private TypeOfWaypoint typeOfWaypoint;
    private String latitude;
    private String longitude;
}
