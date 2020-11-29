package de.neuefische.saildog.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Waypoint {

    private String waypointId;
    private String latitude;
    private String longitude;
}
