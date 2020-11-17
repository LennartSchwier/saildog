package de.neuefische.saildog.utils;

import de.neuefische.saildog.model.Weather;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

class TrimUtilsTest {

    @ParameterizedTest
    @CsvSource({
            "0, 0, LIGHT_WIND, NO_WAVES",
            "3, 0.5, LIGHT_WIND, WAVES",
            "12, 0.3, MEDIUM_WIND, NO_WAVES",
            "12, 2.8, MEDIUM_WIND, WAVES",
            "20, 1.4, STRONG_WIND, NO_WAVES",
            "200, 200, STRONG_WIND, WAVES"
    })
    public void testSetWeatherReturnsCorrectWeatherModel(double wind, double wave, String expectedWind, String expectedWave){
        // WHEN
        JibTrimUtils jibTrimUtils = new JibTrimUtils();
        Weather resultWeather = jibTrimUtils.setWeather(wind, wave);

        // THEN
        assertThat(resultWeather.getWindState().toString(), is(expectedWind));
        assertThat(resultWeather.getWaveState().toString(), is(expectedWave));
    }
}