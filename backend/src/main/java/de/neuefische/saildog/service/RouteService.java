package de.neuefische.saildog.service;

import de.neuefische.saildog.dao.RouteDao;
import de.neuefische.saildog.dto.RouteDto;
import de.neuefische.saildog.model.Leg;
import de.neuefische.saildog.model.Route;
import de.neuefische.saildog.model.Waypoint;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

@Service
public class RouteService {

    private final RouteDao routeDao;

    public RouteService(RouteDao routeDao) {
        this.routeDao = routeDao;
    }

    public List<Route> getRoutesByCreator(Optional<String> creator) {
        if (creator.isPresent() && !creator.get().isBlank()) {
            return routeDao.findAllByCreator(creator.get());
        }
        return routeDao.findAll();
    }

    public Route addNewRoute(RouteDto routeToAdd, Principal principal) {
        Route newRoute = Route.builder().build();
        routeDao.save(newRoute);
        return newRoute;
    }

    public Leg createLeg(RouteDto routeToCreate) {
        Waypoint startPoint = routeToCreate.getLeg().getStartPoint();
        Waypoint endPoint = routeToCreate.getLeg().getEndPoint();
        return Leg.builder()
                .startPoint(startPoint)
                .endPoint(endPoint)
                .distance(calculateDistance(startPoint, endPoint))
                .build();
    }

    public double calculateDistance(Waypoint startPoint, Waypoint endPoint) {
        double startLatitudeRad = Double.parseDouble(startPoint.getLatitude()) * Math.PI/180;
        double startLongitudeRad = Double.parseDouble(startPoint.getLongitude()) * Math.PI/180;
        double endLatitudeRad = Double.parseDouble(endPoint.getLatitude()) * Math.PI/180;
        double endLongitudeRad = Double.parseDouble(endPoint.getLongitude()) * Math.PI/180;
        double meanRadius = 6371000;

        double distanceInMeters = Math.acos(
                Math.sin(startLatitudeRad) * Math.sin(endLatitudeRad) +
                Math.cos(startLatitudeRad) * Math.cos(endLatitudeRad) *
                        Math.cos(endLongitudeRad - startLongitudeRad)) * meanRadius;

        return distanceInMeters / 1852;
    }
}
