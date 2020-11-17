package de.neuefische.saildog.utils;

import de.neuefische.saildog.enums.BoatCourse;
import de.neuefische.saildog.enums.FairLeadState;
import de.neuefische.saildog.enums.LuffFootState;
import de.neuefische.saildog.enums.SheetState;
import de.neuefische.saildog.model.HeadSail;
import org.junit.jupiter.api.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

class HeadSailTrimUtilsTest {

    @Test
    public void testCalculateHeadSailTrimsReturnsCorrectTrim() {
        // GIVEN
        HeadSailTrimUtils headSailTrimUtils = new HeadSailTrimUtils();
        double windSpeed = 12;
        double waveHeight = 1.8;
        BoatCourse course = BoatCourse.WIND_ASTERN;

        // WHEN
        HeadSail result = headSailTrimUtils.calculateHeadSailTrim(windSpeed, waveHeight, course);

        // THEN
        assertThat(result, is(new HeadSail(SheetState.LOOSE, FairLeadState.FORWARD, LuffFootState.SLIGHTLY_CRINKLED)));
    }
}