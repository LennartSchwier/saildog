package de.neuefische.saildog.api;

import com.fasterxml.jackson.core.JsonProcessingException;
import de.neuefische.saildog.dto.WeatherDto;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.when;

@SpringBootTest
class StormGlassServiceTest {

    @MockBean
    private StormGlassService mockedStormGlassService;

    @Test
    public void testGetSgResponseReturnsStatusOkAndJson() {
        // GIVEN
        String latitude = "39.504082";
        String longitude = "2.647854";
        String testUrl = "https://api.stormglass.io/v2/weather/point?lat=39.504082&lng=2.647854&params=windSpeed,waveHeight&start=1605947176&end=1605947176&source=sg";

        // WHEN
        when(mockedStormGlassService.generateSgUrl(latitude, longitude)).thenReturn(testUrl);
        when(mockedStormGlassService.getSgWeather(latitude, longitude)).thenCallRealMethod();
        WeatherDto response = mockedStormGlassService.getSgWeather(latitude, longitude);

        // THEN
        assertThat(response, is(""));
    }

    @Test
    public void testRefactorSgResponseReturnsCorrectWeatherDto() throws JsonProcessingException {
        // GIVEN
        String sgResponse = "{\"hours\":[{\"time\":\"2020-11-19T11:00:00+00:00\",\"waveHeight\":{\"sg\":0.37},\"windSpeed\":{\"sg\":1.47}}],\"meta\":{\"cost\":1,\"dailyQuota\":50,\"end\":\"2020-11-19 11:00\",\"lat\":39.504082,\"lng\":2.647854,\"params\":[\"windSpeed\",\"waveHeight\"],\"requestCount\":27,\"source\":[\"sg\"],\"start\":\"2020-11-19 11:00\"}}";

        // WHEN
        when(mockedStormGlassService.refactorSgResponse(sgResponse)).thenCallRealMethod();
        WeatherDto weatherDto = mockedStormGlassService.refactorSgResponse(sgResponse);

        // THEN
        assertThat(weatherDto, is(new WeatherDto("2020-11-19T11:00:00+00:00", 1.47, 0.37)));
    }


}