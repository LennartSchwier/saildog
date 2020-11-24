package de.neuefische.saildog.controller;

import de.neuefische.saildog.enums.*;
import de.neuefische.saildog.model.HeadSail;
import de.neuefische.saildog.model.MainSail;
import de.neuefische.saildog.service.TrimService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
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

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.when;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource(properties = {
        "storm.glass.key=someSecretKey",
        "jwt.secret.key=someSecretKey"
})
class TrimControllerTest {

    @LocalServerPort
    private int port;

    @MockBean
    private TrimService mockedTrimService;

    @Autowired
    private TestRestTemplate restTemplate;

    public String getTrimUrl(String sail) {
        String requestParam = "?course=closed_hauled&wind=3.0&wave=2.8";
        return "http://localhost:" + port + "/api/trim/"+ sail + requestParam;
    }

    private HttpEntity<Void> createHttpEntity() {
        String jwtToken = Jwts.builder()
                .setClaims(new HashMap<>())
                .setSubject("some-test-user")
                .setIssuedAt(Date.from(Instant.now()))
                .setExpiration(Date.from(Instant.now().plus(60, ChronoUnit.MINUTES)))
                .signWith(SignatureAlgorithm.HS256, "someSecretKey")
                .compact();
        HttpHeaders header = new HttpHeaders();
        header.setBearerAuth(jwtToken);
        return new HttpEntity<>(null, header);
    }

    @Test
    public void getHeadSailTrimReturnsCorrectResponse() {
        // GIVEN
        String url = getTrimUrl("headsail");
        HeadSail expectedResult = new HeadSail(SheetState.LOOSE, FairLeadState.SLIGHTLY_FORWARD, LuffFootState.SLIGHTLY_CRINKLED);
        HttpEntity<Void> entity = createHttpEntity();

        // WHEN
        when(mockedTrimService.getHeadSailTrim("closed_hauled", 3.0, 2.8 )).thenReturn(expectedResult);
        ResponseEntity<HeadSail> response = restTemplate.exchange(url, HttpMethod.GET, entity, HeadSail.class);

        // THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), is(new HeadSail(SheetState.LOOSE, FairLeadState.SLIGHTLY_FORWARD, LuffFootState.SLIGHTLY_CRINKLED)));
    }

    @Test
    public void getMainSailTrimReturnsCorrectResponse() {
        // GIVEN
        String url = getTrimUrl("mainsail");
        MainSail expectedResult = MainSail.builder()
                .mainSailSheet(SheetState.LOOSE)
                .traveller(TravellerState.SLIGHTLY_LUV)
                .boomVang(BoomVangState.LOOSE)
                .mainSailLuff(LuffFootState.SLIGHTLY_CRINKLED)
                .mainSailFoot(LuffFootState.SMOOTH)
                .build();
        HttpEntity<Void> entity = createHttpEntity();

        // WHEN
        when(mockedTrimService.getMainSailTrim("closed_hauled", 3.0, 2.8 )).thenReturn(expectedResult);
        ResponseEntity<MainSail> response = restTemplate.exchange(url, HttpMethod.GET, entity, MainSail.class);

        // THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), is(MainSail.builder()
                .mainSailSheet(SheetState.LOOSE)
                .traveller(TravellerState.SLIGHTLY_LUV)
                .boomVang(BoomVangState.LOOSE)
                .mainSailLuff(LuffFootState.SLIGHTLY_CRINKLED)
                .mainSailFoot(LuffFootState.SMOOTH)
                .build()
        ));
    }

}