package de.neuefische.saildog.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.*;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class WeatherServiceTest {

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Test
    public void testGetWeatherReturnsCorrectObject() throws IOException {
        // GIVEN
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "c532036c-2a04-11eb-a53d-0242ac130002-c5320466-2a04-11eb-a53d-0242ac130002");
        HttpEntity<Void> request = new HttpEntity<>(null, headers);

        // WHEN
        ResponseEntity<String> response = testRestTemplate.exchange("https://api.stormglass.io/v2/weather/point?lat=39.504082&lng=2.647854&params=windSpeed,waveHeight&start=1605783600&end=1605783600&source=sg", HttpMethod.GET, request, String.class);
        ObjectMapper objectMapper = new ObjectMapper();
        /*List<Object> hours = (List<Object>) jsonMap.get("hours");
        Map<String, Object> weatherReport = (Map<String, Object>) hours.get(0);
        Map<String, Object> waveHeight = (Map<String, Object>) weatherReport.get("waveHeight");
        double actualWaveHeight = (double) waveHeight.get("sg");*/

        // THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), is(0.37));
    }
}