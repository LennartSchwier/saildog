package de.neuefische.saildog.controller;

import de.neuefische.saildog.dao.RouteDao;
import de.neuefische.saildog.dto.LegDto;
import de.neuefische.saildog.dto.RouteDto;
import de.neuefische.saildog.enums.TypeOfWaypoint;
import de.neuefische.saildog.model.Leg;
import de.neuefische.saildog.model.Route;
import de.neuefische.saildog.model.Waypoint;
import de.neuefische.saildog.utils.RouteUtils;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.*;
import org.springframework.test.context.TestPropertySource;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource(properties = {
        "storm.glass.key=someSecretKey",
        "jwt.secret.key=someSecretKey"
})
class RouteControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private RouteDao routeDao;

    @MockBean
    RouteUtils mockedRouteUtils;

    private HttpHeaders createHttpHeader() {
        String jwtToken = Jwts.builder()
                .setClaims(new HashMap<>())
                .setSubject("testRouteCreator")
                .setIssuedAt(Date.from(Instant.now()))
                .setExpiration(Date.from(Instant.now().plus(60, ChronoUnit.MINUTES)))
                .signWith(SignatureAlgorithm.HS256, "someSecretKey")
                .compact();
        HttpHeaders header = new HttpHeaders();
        header.setBearerAuth(jwtToken);
        return header;
    }

    @BeforeEach
    public void setupDao() {
        routeDao.deleteAll();
        routeDao.saveAll(List.of(
                Route.builder()
                        .routeId("some random id")
                        .routeName("some test route")
                        .creator("testRouteCreator")
                        .legs(List.of(
                                Leg.builder().legId("some random id")
                                        .startWaypoint(new Waypoint(TypeOfWaypoint.START, "50.930932", "6.933717"))
                                        .endWaypoint(new Waypoint(TypeOfWaypoint.END, "51.169266", "6.788612"))
                                        .distance(15.321956816335407)
                                        .bearing(339.0)
                                        .build(),
                                Leg.builder().legId("some random id")
                                        .startWaypoint(new Waypoint(TypeOfWaypoint.START, "34.523", "-137.453"))
                                        .endWaypoint(new Waypoint(TypeOfWaypoint.END, "21.45", "-152.768"))
                                        .distance(1126.603807406169)
                                        .bearing(230.0)
                                        .build()
                        ))
                        .totalDistance(1141.9257642225043)
                        .build()
        ));
    }

    @Test
    public void testGetRoutesByCreatorReturnsUserRoutes() {
        // GIVEN
        String url = "http://localhost:" + port + "/api/route";
        HttpHeaders header = createHttpHeader();
        HttpEntity<Void> entity = new HttpEntity<>(null, header);
        Route[] expectedResponse = new Route[] {Route.builder()
                .routeId("some random id")
                .routeName("some test route")
                .creator("testRouteCreator")
                .legs(List.of(
                        Leg.builder().legId("some random id")
                                .startWaypoint(new Waypoint(TypeOfWaypoint.START, "50.930932", "6.933717"))
                                .endWaypoint(new Waypoint(TypeOfWaypoint.END, "51.169266", "6.788612"))
                                .distance(15.321956816335407)
                                .bearing(339.0)
                                .build(),
                        Leg.builder().legId("some random id")
                                .startWaypoint(new Waypoint(TypeOfWaypoint.START, "34.523", "-137.453"))
                                .endWaypoint(new Waypoint(TypeOfWaypoint.END, "21.45", "-152.768"))
                                .distance(1126.603807406169)
                                .bearing(230.0)
                                .build()
                ))
                .totalDistance(1141.9257642225043)
                .build()};

        // WHEN
        ResponseEntity<Route[]> response = restTemplate.exchange(url, HttpMethod.GET, entity, Route[].class);

        // THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), is(expectedResponse));
    }

    @Test
    public void testAddNewRouteAddsRouteToDbAndReturnsRoute() {
        // GIVEN
        String url = "http://localhost:" + port + "/api/route";
        RouteDto request = new RouteDto("some test route", List.of(
                new LegDto("50.930932", "6.933717", "51.169266", "6.788612"),
                new LegDto("34.523", "-137.453", "21.45", "-152.768")
        ));
        HttpHeaders header = createHttpHeader();
        HttpEntity<RouteDto> entity = new HttpEntity<RouteDto>(request, header);

        // WHEN
        when(mockedRouteUtils.calculateDistance(any(), any())).thenCallRealMethod();
        when(mockedRouteUtils.calculateBearing(any(), any())).thenCallRealMethod();
        when(mockedRouteUtils.createRandomId()).thenReturn("some random id");
        ResponseEntity<Route> response = restTemplate.exchange(url, HttpMethod.POST, entity, Route.class);

        // THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), is(Route.builder()
                .routeId("some random id")
                .routeName("some test route")
                .creator("testRouteCreator")
                .legs(List.of(
                        Leg.builder().legId("some random id")
                                .startWaypoint(new Waypoint(TypeOfWaypoint.START, "50.930932", "6.933717"))
                                .endWaypoint(new Waypoint(TypeOfWaypoint.END, "51.169266", "6.788612"))
                                .distance(15.32)
                                .bearing(339.0)
                                .build(),
                        Leg.builder().legId("some random id")
                                .startWaypoint(new Waypoint(TypeOfWaypoint.START, "34.523", "-137.453"))
                                .endWaypoint(new Waypoint(TypeOfWaypoint.END, "21.45", "-152.768"))
                                .distance(1126.6)
                                .bearing(230.0)
                                .build()
                ))
                .totalDistance(1141.0)
                .build()
        ));
    }

}