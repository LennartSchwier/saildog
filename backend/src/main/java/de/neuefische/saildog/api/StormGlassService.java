package de.neuefische.saildog.api;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import de.neuefische.saildog.api.stormGlassModels.StormGlassResponse;
import de.neuefische.saildog.api.stormGlassModels.WaveHeight;
import de.neuefische.saildog.dto.WeatherDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Optional;


@Service
public class StormGlassService {

    @Value("${storm.glass.key}")
    private String stormGlassKey;

    public WeatherDto getSgWeather(String latitude, String longitude) {
        HttpHeaders header = new HttpHeaders();
        header.set("Authorization", stormGlassKey);

        HttpEntity<Void> entity = new HttpEntity<>(null, header);
        String url = generateSgUrl(latitude, longitude);
        RestTemplate restTemplate = new RestTemplate();

        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);

        try {
            return refactorSgResponse(response.getBody());
        } catch (Exception e ) {
            throw new RuntimeException("Json deserialization failed.");
        }
    }

    public WeatherDto refactorSgResponse(String sgResponse) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        StormGlassResponse stormGlassResponse = objectMapper.readValue(sgResponse, StormGlassResponse.class);
        String time = stormGlassResponse.getHours().get(0).getTime();
        double windSpeed = stormGlassResponse.getHours().get(0).getWindSpeed().getSg();
        Optional<WaveHeight> waveHeight = Optional.ofNullable(stormGlassResponse.getHours().get(0).getWaveHeight());
        if (waveHeight.isEmpty()) {
            return new WeatherDto(time, windSpeed, 0);
        }
        return new WeatherDto(time, windSpeed, waveHeight.get().getSg());
    }

    public String generateSgUrl(String latitude, String longitude){

        return "https://api.stormglass.io/v2/weather/point?lat=" +
                latitude +
                "&lng=" +
                longitude +
                "&params=windSpeed,waveHeight&start=" +
                Instant.now().plus(60, ChronoUnit.MINUTES).getEpochSecond() +
                "&end=" +
                Instant.now().plus(60, ChronoUnit.MINUTES).getEpochSecond() +
                "&source=sg";
    }
}
