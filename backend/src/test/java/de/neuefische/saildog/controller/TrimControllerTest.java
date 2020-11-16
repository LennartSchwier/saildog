package de.neuefische.saildog.controller;

import de.neuefische.saildog.dto.EnvironmentDto;
import de.neuefische.saildog.dto.TrimDto;
import de.neuefische.saildog.enums.BoatCourse;
import de.neuefische.saildog.enums.WaveState;
import de.neuefische.saildog.enums.WindState;
import de.neuefische.saildog.service.TrimService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class TrimControllerTest {

    @LocalServerPort
    private int port;

    @MockBean
    private TrimService mockedTrimService;

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void getJibTrimReturnsHttpStatusOk() {
        // GIVEN
        String url = "http://localhost:" + port + "/api/trim/jib";
        EnvironmentDto environment = new EnvironmentDto(WindState.LIGHT_WIND, WaveState.WAVES, BoatCourse.CLOSED_HAULED);

        // WHEN
        ResponseEntity<TrimDto> response = restTemplate.getForEntity(url, TrimDto.class);

        // THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
    }

}