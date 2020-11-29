package de.neuefische.saildog.service;

import de.neuefische.saildog.dao.RouteDao;
import de.neuefische.saildog.model.Route;
import org.springframework.stereotype.Service;

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
}
