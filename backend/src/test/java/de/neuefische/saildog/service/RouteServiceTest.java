package de.neuefische.saildog.service;

import de.neuefische.saildog.dao.RouteDao;
import de.neuefische.saildog.model.Route;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class RouteServiceTest {

    RouteDao mockedRouteDao = mock(RouteDao.class);
    RouteService routeService = new RouteService(mockedRouteDao);

    @Test
    public void testGetAllRoutesByCreatorReturnsCorrectListOfRoutes() {
        // GIVEN
        String creator = "user1";

        // WHEN
        when(mockedRouteDao.findAllByCreator(creator)).thenReturn(List.of(
                new Route("route1", "user1", null, 1892),
                new Route("route3", "user1", null, 445)
        ));
        List<Route> result = routeService.getRoutesByCreator(Optional.of(creator));

        // THEN
        assertThat(result, is(List.of(
                new Route("route1", "user1", null, 1892),
                new Route("route3", "user1", null, 445)
        )));

    }
}