package de.neuefische.saildog.utils;

import de.neuefische.saildog.model.Waypoint;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
public class RouteUtils {

    public double calculateDistance(Waypoint startPoint, Waypoint endPoint) {
        double startLatitudeRad = Double.parseDouble(startPoint.getLatitude()) * Math.PI/180;
        double startLongitudeRad = Double.parseDouble(startPoint.getLongitude()) * Math.PI/180;
        double endLatitudeRad = Double.parseDouble(endPoint.getLatitude()) * Math.PI/180;
        double endLongitudeRad = Double.parseDouble(endPoint.getLongitude()) * Math.PI/180;
        double meanRadius = 6371e3;

        double distanceInMeters = Math.acos(
                Math.sin(startLatitudeRad) * Math.sin(endLatitudeRad) +
                        Math.cos(startLatitudeRad) * Math.cos(endLatitudeRad) *
                                Math.cos(endLongitudeRad - startLongitudeRad)) * meanRadius;

        return distanceInMeters / 1852;
    }

    public double calculateBearing(Waypoint startPoint, Waypoint endPoint) {
        double startLatitudeRad = Double.parseDouble(startPoint.getLatitude()) * Math.PI/180;
        double startLongitudeRad = Double.parseDouble(startPoint.getLongitude()) * Math.PI/180;
        double endLatitudeRad = Double.parseDouble(endPoint.getLatitude()) * Math.PI/180;
        double endLongitudeRad = Double.parseDouble(endPoint.getLongitude()) * Math.PI/180;

        double y =
                Math.sin(endLongitudeRad - startLongitudeRad) * Math.cos(endLatitudeRad);
        double x =
                Math.cos(startLatitudeRad) * Math.sin(endLatitudeRad) -
                        Math.sin(startLatitudeRad) * Math.cos(endLatitudeRad) * Math.cos(endLongitudeRad - startLongitudeRad);

        return Math.round((Math.atan2(y, x) * 180/Math.PI + 360) % 360);
    }

    public String createRandomId() {
        return UUID.randomUUID().toString();
    }
}
