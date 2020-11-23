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

    @Test
    public void getRequestWithValidJwtTokenReturnsStatusOk() {
        // GIVEN
        String url = "http://localhost:" + port + "/api/trim";
        String key = "someSecretKey";
        String token = Jwts.builder()
                .setClaims(new HashMap<>())
                .setSubject("some_user")
                .setIssuedAt(Date.from(Instant.now()))
                .setExpiration(Date.from(Instant.now().plus(60, ChronoUnit.MINUTES)))
                .signWith(SignatureAlgorithm.HS256, key)
                .compact();
        HttpHeaders header = new HttpHeaders();
        header.setBearerAuth(token);
        HttpEntity<Void> entity = new HttpEntity<>(null, header);

        // WHEN
        ResponseEntity<HeadSail> response = restTemplate.exchange(url, HttpMethod.GET, entity, HeadSail.class);

        // THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
    }
}