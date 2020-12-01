package de.neuefische.saildog.utils;

import de.neuefische.saildog.model.Waypoint;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
public class RouteUtils {

    public double calculateDistance(Waypoint startPoint, Waypoint endPoint) {
        double startLatitudeRad = geoLocationToRadian(startPoint.getLatitude());
        double startLongitudeRad = geoLocationToRadian(startPoint.getLongitude());
        double endLatitudeRad = geoLocationToRadian(endPoint.getLatitude());
        double endLongitudeRad = geoLocationToRadian(endPoint.getLongitude());
        double meanRadius = 6371e3;

        double distanceInMeters = Math.acos(
                Math.sin(startLatitudeRad) * Math.sin(endLatitudeRad) +
                        Math.cos(startLatitudeRad) * Math.cos(endLatitudeRad) *
                                Math.cos(endLongitudeRad - startLongitudeRad)) * meanRadius;

        return Math.round(distanceInMeters / 1852 * 100.0) / 100.0;
    }

    public double calculateBearing(Waypoint startPoint, Waypoint endPoint) {
        double startLatitudeRad = geoLocationToRadian(startPoint.getLatitude());
        double startLongitudeRad = geoLocationToRadian(startPoint.getLongitude());
        double endLatitudeRad = geoLocationToRadian(endPoint.getLatitude());
        double endLongitudeRad = geoLocationToRadian(endPoint.getLongitude());

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

    private double geoLocationToRadian(String location) {
        return Double.parseDouble(location) * Math.PI/180;
    }
}
