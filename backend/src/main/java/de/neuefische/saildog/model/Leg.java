package de.neuefische.saildog.model;

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
    private Waypoint startWaypoint;
    private Waypoint endWaypoint;
    private double bearing;
    private double distance;
}
