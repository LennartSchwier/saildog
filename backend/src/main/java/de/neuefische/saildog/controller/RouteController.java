package de.neuefische.saildog.controller;

import de.neuefische.saildog.dto.RouteDto;
import de.neuefische.saildog.model.Route;
import de.neuefische.saildog.service.RouteService;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping(path = "api/route")
public class RouteController {

    private final RouteService routeService;

    public RouteController(RouteService routeService) {
        this.routeService = routeService;
    }

    @GetMapping
    public List<Route> getRoutesByCreator(Principal principal) {
        return routeService.getRoutesByCreator(principal.getName());
    }

    @PostMapping
    public Route addRoute(@RequestBody RouteDto routeToAdd, Principal principal) {
        return routeService.addNewRoute(routeToAdd, principal.getName());
    }

    @DeleteMapping(path = "{routeId}")
    public void deleteRoute(@PathVariable String routeId, Principal principal) {
        routeService.deleteRoute(routeId, principal.getName());
    }
}
