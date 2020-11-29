package de.neuefische.saildog.model;

import de.neuefische.saildog.enums.TypeOfWaypoint;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Leg {

    private String legId;
    private Waypoint startPoint;
    private Waypoint endPoint;
    private double bearing;
    private double distance;
}
