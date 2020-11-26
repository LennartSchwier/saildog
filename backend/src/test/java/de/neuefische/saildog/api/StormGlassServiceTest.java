package de.neuefische.saildog.api;

import com.fasterxml.jackson.core.JsonProcessingException;
import de.neuefische.saildog.api.stormGlass.StormGlassService;
import de.neuefische.saildog.dto.WeatherDto;
import org.junit.jupiter.api.Test;
import org.springframework.test.context.TestPropertySource;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

@TestPropertySource(properties = {
        "storm.glass.key=somesecretkey"
})
class StormGlassServiceTest {

    @Test
    public void testRefactorSgResponseReturnsCorrectWeatherDto() throws JsonProcessingException {
        // GIVEN
        StormGlassService stormGlassService = new StormGlassService();
        String sgResponse = "{\"hours\":[{\"airTemperature\":{\"sg\":8.06}," +
                "\"currentDirection\":{\"sg\":43.08},\"currentSpeed\":{\"sg\":0.74}," +
                "\"pressure\":{\"sg\":1019.79},\"time\":\"2020-11-26T15:00:00+00:00\",\"visibility\":{\"sg\":24.14}," +
                "\"waterTemperature\":{\"sg\":12.88},\"waveDirection\":{\"sg\":262.1},\"waveHeight\":{\"sg\":0.44}," +
                "\"windDirection\":{\"sg\":79.22},\"windSpeed\":{\"sg\":2.87}}]," +
                "\"meta\":{\"cost\":1,\"dailyQuota\":1000,\"end\":\"2020-11-26 15:34\",\"lat\":50.883839,\"lng\":1.334657,\"params\":[\"windSpeed\",\"waveHeight\",\"airTemperature\",\"pressure\",\"currentDirection\",\"currentSpeed\",\"visibility\",\"windDirection\",\"waveDirection\",\"waterTemperature\"],\"requestCount\":24,\"source\":[\"sg\"],\"start\":\"2020-11-26 15:00\"}}";

        // WHEN
        WeatherDto weatherDto = stormGlassService.refactorSgResponse(sgResponse);

        // THEN
        assertThat(weatherDto, is(WeatherDto.builder()
                .time("2020-11-26T15:00:00+00:00")
                .airTemperature(8.06)
                .currentDirection(43.08)
                .currentSpeed(0.74)
                .pressure(1019.79)
                .visibility(24.14)
                .waterTemperature(12.88)
                .waveDirection(262.1)
                .waveHeight(0.44)
                .windDirection(79.22)
                .windSpeed(2.87)
                .build()));
    }


}