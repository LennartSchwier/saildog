package de.neuefische.saildog.utils;

import de.neuefische.saildog.enums.BoatCourse;
import de.neuefische.saildog.enums.FairLeadState;
import de.neuefische.saildog.enums.LuffFootState;
import de.neuefische.saildog.enums.SheetState;
import de.neuefische.saildog.model.Jib;
import de.neuefische.saildog.model.Weather;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

class JibTrimUtilsTest {

    @Test
    public void testCalculateJibTrimsReturnsCorrectTrim() {
        // GIVEN
        JibTrimUtils jibTrimUtils = new JibTrimUtils();
        double windSpeed = 12;
        double waveHeight = 1.8;
        BoatCourse course = BoatCourse.WIND_ASTERN;

        // WHEN
        Jib result = jibTrimUtils.calculateJibTrim(windSpeed, waveHeight, course);

        // THEN
        assertThat(result.getJibSheet(), is(SheetState.LOOSE));
        assertThat(result.getFairLead(), is(FairLeadState.FORWARD));
        assertThat(result.getJibLuff(), is(LuffFootState.SLIGHTLY_CRINKLED));
    }
}