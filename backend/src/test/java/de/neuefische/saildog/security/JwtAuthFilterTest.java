package de.neuefische.saildog.security;

import de.neuefische.saildog.model.HeadSail;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
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

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource(properties = {
        "storm.glass.key=someSecretKey",
        "jwt.secret.key=someSecretKey"
})
class JwtAuthFilterTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    private final String key = "someSecretKey";

    private String createUrl() {
        return "http://localhost:" + port + "api/trim/mainsail?course=wind_astern&wind=2&wave=2";
    }

    private HttpEntity<Void> createHttpEntity(String jwtToken) {
        HttpHeaders header = new HttpHeaders();
        header.setBearerAuth(jwtToken);
        return new HttpEntity<>(null, header);
    }

    @Test
    public void getRequestWithValidJwtTokenReturnsStatusOk() {
        // GIVEN
        String url = createUrl();
        String jwtToken = Jwts.builder()
                .setClaims(new HashMap<>())
                .setSubject("some-test-user")
                .setIssuedAt(Date.from(Instant.now()))
                .setExpiration(Date.from(Instant.now().plus(60, ChronoUnit.MINUTES)))
                .signWith(SignatureAlgorithm.HS256, key)
                .compact();
        HttpEntity<Void> entity = createHttpEntity(jwtToken);

        // WHEN
        ResponseEntity<HeadSail> response = restTemplate.exchange(url, HttpMethod.GET, entity, HeadSail.class);

        // THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
    }

    @Test
    public void getWithWrongJwtSecretKeyReturnsStatusForbidden() {
        // GIVEN
        String url = createUrl();
        String wrongKeyJwtToken = Jwts.builder()
                .setClaims(new HashMap<>())
                .setSubject("some-test-user")
                .setIssuedAt(Date.from(Instant.now()))
                .setExpiration(Date.from(Instant.now().plus(60, ChronoUnit.MINUTES)))
                .signWith(SignatureAlgorithm.HS256, "some-wrong-key")
                .compact();
        HttpEntity<Void> entity = createHttpEntity(wrongKeyJwtToken);

        // WHEN
        ResponseEntity<Void> response = restTemplate.exchange(url, HttpMethod.GET, entity, Void.class);

        // THEN
        assertThat(response.getStatusCode(), is(HttpStatus.FORBIDDEN));
    }

    @Test
    public void getWithExpiredJwtTokenReturnsStatusForbidden() {
        // GIVEN
        String url = createUrl();
        String expiredJwtToken = Jwts.builder()
                .setClaims(new HashMap<>())
                .setSubject("some-test-user")
                .setIssuedAt(Date.from(Instant.now()))
                .setExpiration(Date.from(Instant.now().minus(2, ChronoUnit.MINUTES)))
                .signWith(SignatureAlgorithm.HS256, key)
                .compact();
        HttpEntity<Void> entity = createHttpEntity(expiredJwtToken);

        // WHEN
        ResponseEntity<Void> response = restTemplate.exchange(url, HttpMethod.GET, entity, Void.class);

        // THEN
        assertThat(response.getStatusCode(), is(HttpStatus.FORBIDDEN));
    }
}