package de.neuefische.saildog.controller;

import de.neuefische.saildog.dao.UserDao;
import de.neuefische.saildog.dto.LoginDto;
import de.neuefische.saildog.model.SailDogUser;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.TestPropertySource;

import java.util.Date;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource(properties = {
        "storm.glass.key=someSecretKey",
        "jwt.secret.key=someSecretKey"
})
class LoginControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private UserDao userDao;

    @BeforeEach
    public void setupUserDb() {
        userDao.deleteAll();
        userDao.save(new SailDogUser(
                "test_user",
                "$2a$10$3ZDGDtXBoutUNq/.nih8seW4tLLOHTzr./EwYoDwLA1JRDqEq42fu",
                "test user"));
    }

    private String createUrl() {
        return "http://localhost:" + port + "auth/login";
    }

    @Test
    public void testLoginWithCorrectCredentialsReturnsCorrectResponse() {
        // GIVEN
        LoginDto loginDto = new LoginDto("test_user", "test_password");

        // WHEN
        ResponseEntity<String> response = restTemplate.postForEntity(createUrl(), loginDto, String.class);
        String jwtToken = response.getBody();
        String key = "someSecretKey";
        Claims claims = Jwts.parser().setSigningKey(key).parseClaimsJws(jwtToken).getBody();

        // THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(claims.getSubject(), is("test_user"));
        assertThat(claims.getExpiration().after(new Date()), is(true));
    }

    @Test
    public void testloginWithIncorrectCredentialsReturnsForbidden() {
        // GIVEN
        LoginDto badLoginDto = new LoginDto("wrong_user", "wrong_password");

        // WHEN
        ResponseEntity<String> response = restTemplate.postForEntity(createUrl(), badLoginDto, String.class);

        // THEN
        assertThat(response.getStatusCode(), is(HttpStatus.FORBIDDEN));
    }
}