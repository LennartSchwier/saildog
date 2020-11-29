package de.neuefische.saildog.service;

import de.neuefische.saildog.dao.RouteDao;
import de.neuefische.saildog.dto.RouteDto;
import de.neuefische.saildog.model.Leg;
import de.neuefische.saildog.model.Route;
import de.neuefische.saildog.model.Waypoint;
import de.neuefische.saildog.utils.RouteUtils;
import org.springframework.stereotype.Service;

import java.util.List;

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
                .routeId(routeToAdd.getRouteId())
                .creator(creator)
                .legs(List.of(createLeg(routeToAdd)))
                .build();
        routeDao.save(newRoute);
        return newRoute;
    }

    public Leg createLeg(RouteDto routeToCreate) {
        Waypoint startPoint = routeToCreate.getLeg().getStartPoint();
        Waypoint endPoint = routeToCreate.getLeg().getEndPoint();
        return Leg.builder()
                .legId(routeToCreate.getLeg().getLegId())
                .startPoint(startPoint)
                .endPoint(endPoint)
                .distance(routeUtils.calculateDistance(startPoint, endPoint))
                .bearing(routeUtils.calculateBearing(startPoint, endPoint))
                .build();
    }
}
