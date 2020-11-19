package de.neuefische.saildog.service;

import de.neuefische.saildog.dto.WeatherDto;
import de.neuefische.saildog.utils.UnixTimeUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WeatherService {

    private final RestTemplate restTemplate;
    private final UnixTimeUtils unixTimeUtils;

    @Autowired
    public WeatherService(RestTemplate restTemplate, UnixTimeUtils unixTimeUtils) {
        this.restTemplate = restTemplate;
        this.unixTimeUtils = unixTimeUtils;
    }

    public WeatherDto getWeather() {
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "c532036c-2a04-11eb-a53d-0242ac130002-c5320466-2a04-11eb-a53d-0242ac130002");
        HttpEntity<Void> request = new HttpEntity<>(null, headers);
        ResponseEntity<WeatherDto> response = restTemplate.exchange("https://api.stormglass.io/v2/weather/point?lat=39.504082&lng=2.647854&params=windSpeed,waveHeight&start=1605783600&end=1605783600&source=sg", HttpMethod.GET, request, WeatherDto.class);
        return response.getBody();
    }

    private String generateRequestUrl() {
        return "https://api.stormglass.io/v2/weather/point?" +
                "lat=" +
                "39.504082" +
                "&lng=" +
                "2.647854"+
                "&params=windSpeed,waveHeight&start=" +
                unixTimeUtils.getUnixTime() +
                "&end=" +
                unixTimeUtils.getUnixTime() +
                "&source=sg";
    }

}
