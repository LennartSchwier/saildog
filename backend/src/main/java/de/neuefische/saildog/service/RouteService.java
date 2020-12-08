package de.neuefische.saildog.service;

import de.neuefische.saildog.dao.RouteDao;
import de.neuefische.saildog.dto.LegDto;
import de.neuefische.saildog.dto.RouteDto;
import de.neuefische.saildog.enums.TypeOfWaypoint;
import de.neuefische.saildog.model.Leg;
import de.neuefische.saildog.model.Route;
import de.neuefische.saildog.model.Waypoint;
import de.neuefische.saildog.utils.RouteUtils;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RouteService {

    private final RouteDao routeDao;
    private final RouteUtils routeUtils;

    public RouteService(RouteDao routeDao, RouteUtils routeUtils) {
        this.routeDao = routeDao;
        this.routeUtils = routeUtils;
    }

    public List<Route> getRoutesByCreator(String creator) {
            return routeDao.findAllByCreator(creator);

    }

    public Route addNewRoute(RouteDto routeToAdd, String creator) {
        Route newRoute = Route.builder()
                .routeId(routeUtils.createRandomId())
                .routeName(routeToAdd.getRouteName())
                .creator(creator)
                .legs(createRouting(routeToAdd))
                .totalDistance(calculateTotalDistance(routeToAdd))
                .build();
        routeDao.save(newRoute);
        return newRoute;
    }

    public List<Leg> createRouting(RouteDto routeToCreate) {
        return routeToCreate.getLegs().stream()
                .map(this::createLeg)
                .collect(Collectors.toList());
    }

    public double calculateTotalDistance(RouteDto totalRoute) {
        double totalDistance = createRouting(totalRoute).stream()
                .map(Leg::getDistance)
                .reduce(0.00, Double::sum);
        return Math.round(totalDistance * 100.0) / 100.0;
    }

    public Leg createLeg(LegDto legToCreate) {
        Waypoint startWaypoint = new Waypoint(TypeOfWaypoint.START, legToCreate.getStartLatitude(), legToCreate.getStartLongitude());
        Waypoint endWaypoint = new Waypoint(TypeOfWaypoint.END, legToCreate.getEndLatitude(), legToCreate.getEndLongitude());
        return Leg.builder()
                .legId(routeUtils.createRandomId())
                .startWaypoint(startWaypoint)
                .endWaypoint(endWaypoint)
                .distance(routeUtils.calculateDistance(startWaypoint, endWaypoint))
                .bearing(routeUtils.calculateBearing(startWaypoint, endWaypoint))
                .build();
    }

    public void deleteRoute(String routeId, String creator) {
        Route routeToDelete = routeDao.findById(routeId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

        if (!routeToDelete.getCreator().equals(creator)) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN);
        }
        routeDao.deleteById(routeId);
    }
}
