package de.neuefische.saildog.controller;

import de.neuefische.saildog.model.Route;
import de.neuefische.saildog.service.RouteService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/route")
public class RouteController {

    private final RouteService routeService;

    public RouteController(RouteService routeService) {
        this.routeService = routeService;
    }

    @GetMapping
    public List<Route> getRoutesByCreator(@RequestParam Optional<String> creator) {
        return routeService.getRoutesByCreator(creator);
    }
}
