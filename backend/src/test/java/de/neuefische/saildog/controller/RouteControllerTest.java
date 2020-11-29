package de.neuefische.saildog.controller;

import de.neuefische.saildog.dao.RouteDao;
import de.neuefische.saildog.dto.RouteDto;
import de.neuefische.saildog.enums.TypeOfWaypoint;
import de.neuefische.saildog.model.Leg;
import de.neuefische.saildog.model.Route;
import de.neuefische.saildog.model.Waypoint;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
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
                new Route("route1", "testRouteCreator", null, 1892),
                new Route("route2", "user2", null, 213),
                new Route("route3", "testRouteCreator", null, 445),
                new Route("route4", "user3", null, 12)
        ));
    }

    @Test
    public void testGetRoutesByCreatorReturnsUserRoutes() {
        // GIVEN
        String url = "http://localhost:" + port + "/api/route";
        HttpHeaders header = createHttpHeader();
        HttpEntity<Void> entity = new HttpEntity<>(null, header);
        Route[] expectedResponse = new Route[] {new Route("route1", "testRouteCreator", null, 1892),
                new Route("route3", "testRouteCreator", null, 445)};

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
        RouteDto request = new RouteDto("some new route", "45.43252", "3.234" , "50.213", "105.4324");
        HttpHeaders header = createHttpHeader();
        HttpEntity<RouteDto> entity = new HttpEntity<RouteDto>(request, header);

        // WHEN
        ResponseEntity<Route> response = restTemplate.exchange(url, HttpMethod.POST, entity, Route.class);

        // THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), is(new Route(
                "some new route", "testRouteCreator", List.of(
                Leg.builder()
                        .legId("some new route")
                        .startPoint(new Waypoint(TypeOfWaypoint.START, "45.43252", "3.234"))
                        .endPoint(new Waypoint(TypeOfWaypoint.END, "50.213", "105.4324"))
                        .distance(3788.0724525924593)
                        .bearing(45.0)
                .build()
        ), 0.0)));
    }

}