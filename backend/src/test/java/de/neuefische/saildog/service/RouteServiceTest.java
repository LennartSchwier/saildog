package de.neuefische.saildog.service;

import de.neuefische.saildog.dao.RouteDao;
import de.neuefische.saildog.dto.LegDto;
import de.neuefische.saildog.dto.RouteDto;
import de.neuefische.saildog.enums.TypeOfWaypoint;
import de.neuefische.saildog.model.Leg;
import de.neuefische.saildog.model.Route;
import de.neuefische.saildog.model.Waypoint;
import de.neuefische.saildog.utils.RouteUtils;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class RouteServiceTest {

    private final RouteDao mockedRouteDao = mock(RouteDao.class);
    private final RouteUtils mockedRouteUtils = mock(RouteUtils.class);
    private final RouteService routeService = new RouteService(mockedRouteDao, mockedRouteUtils);

    private final LegDto testLegDto = new LegDto(
            "50.930932", "6.933717",
            "51.169266", "6.788612"
    );

    private final RouteDto testRouteDto = new RouteDto("some test route", List.of(
            new LegDto("50.930932", "6.933717", "51.169266", "6.788612"),
            new LegDto("34.523", "-137.453", "21.45", "-152.768")
    ));

    private final List<Leg> expectedListOfLegs = List.of(
            Leg.builder().legId("some random legId")
                    .startWaypoint(new Waypoint(TypeOfWaypoint.START, "50.930932", "6.933717"))
                    .endWaypoint(new Waypoint(TypeOfWaypoint.END, "51.169266", "6.788612"))
                    .build(),
            Leg.builder().legId("some random legId")
                    .startWaypoint(new Waypoint(TypeOfWaypoint.START, "34.523", "-137.453"))
                    .endWaypoint(new Waypoint(TypeOfWaypoint.END, "21.45", "-152.768"))
                    .build()
    );

    @Test
    public void testGetAllRoutesByCreatorReturnsCorrectListOfRoutes() {
        // GIVEN
        String creator = "user1";

        // WHEN
        when(mockedRouteDao.findAllByCreator(creator)).thenReturn(List.of(
                new Route("route1", "user1", null, 1892),
                new Route("route3", "user1", null, 445)
        ));
        List<Route> result = routeService.getRoutesByCreator(creator);

        // THEN
        assertThat(result, is(List.of(
                new Route("route1", "user1", null, 1892),
                new Route("route3", "user1", null, 445)
        )));
    }

    @Test
    public void testCreateLegReturnsCorrectLeg() {
        // GIVEN
        Leg expectedResult = Leg.builder().legId("some random legId")
                .startWaypoint(new Waypoint(TypeOfWaypoint.START, "50.930932", "6.933717"))
                .endWaypoint(new Waypoint(TypeOfWaypoint.END, "51.169266", "6.788612"))
                .distance(15.321956816335407)
                .bearing(339.0)
                .build();

        // WHEN
        when(mockedRouteUtils.calculateBearing(any(), any())).thenCallRealMethod();
        when(mockedRouteUtils.calculateDistance(any(),any())).thenCallRealMethod();
        when(mockedRouteUtils.createLegId()).thenReturn("some random legId");
        Leg result = routeService.createLeg(testLegDto);

        // THEN
        assertThat(result, is(expectedResult));
    }

    @Test
    public void testCreateRoutingReturnsListOfLegs() {
        // WHEN
        when(mockedRouteUtils.createLegId()).thenReturn("some random legId");
        List<Leg> result = routeService.createRouting(testRouteDto);

        // THEN
        assertThat(result, is(expectedListOfLegs));
    }

    @Test
    public void testAddNewRouteReturnsNewRouteAndCallsSaveFunction() {
        // GIVEN
        String creator = "testCreator";
        Route expected = Route.builder()
                .routeId("some test route")
                .creator(creator)
                .legs(expectedListOfLegs)
                .build();

        // WHEN
        when(mockedRouteUtils.createLegId()).thenReturn("some random legId");
        Route result = routeService.addNewRoute(testRouteDto, creator);

        // THEN
        assertThat(result, is(expected));
    }
}