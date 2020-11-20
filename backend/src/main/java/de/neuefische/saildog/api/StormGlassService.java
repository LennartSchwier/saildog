package de.neuefische.saildog.api;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import de.neuefische.saildog.api.stormGlassModels.StormGlassResponse;
import de.neuefische.saildog.dto.WeatherDto;
import org.springframework.stereotype.Service;

@Service
public class StormGlassService {


    public WeatherDto refactorSgResponse(String sgResponse) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        StormGlassResponse stormGlassResponse = objectMapper.readValue(sgResponse, StormGlassResponse.class);
        double windSpeed = stormGlassResponse.getHours().get(0).getWindSpeed().getSg();
        double waveHeight = stormGlassResponse.getHours().get(0).getWaveHeight().getSg();

        return new WeatherDto(windSpeed, waveHeight);
    }
}
