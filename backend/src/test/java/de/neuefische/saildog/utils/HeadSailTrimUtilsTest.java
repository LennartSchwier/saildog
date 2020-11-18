package de.neuefische.saildog.utils;

import de.neuefische.saildog.enums.BoatCourse;
import de.neuefische.saildog.enums.FairLeadState;
import de.neuefische.saildog.enums.LuffFootState;
import de.neuefische.saildog.enums.SheetState;
import de.neuefische.saildog.model.HeadSail;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

class HeadSailTrimUtilsTest {

    @ParameterizedTest(name = "with wind speed of {0}, wave height of {1} and a course of {2} sheet trim is {3}")
    @CsvSource({
            "2, 0.0, closed_Hauled, LOOSE",
            "4, 2.0, wind_astern, LOOSE",
            "8, 0.9, beam_reach, MEDIUM_LOOSE",
            "12, 2.0, closed_Hauled, MEDIUM_TIGHT",
            "22, 1.3, closed_Hauled, MAX_TIGHT",
            "200, 200, beam_reach, SLIGHTLY_LOOSE"
    })
    public void testCalculateHeadSailTrimsReturnsCorrectSheetTrim(
            double windSpeed,
            double waveHeight,
            String course,
            SheetState sheetState) {
        // GIVEN
        EnumUtils enumUtils = new EnumUtils();
        HeadSailTrimUtils headSailTrimUtils = new HeadSailTrimUtils();
        BoatCourse boatCourse = enumUtils.getEnum(BoatCourse.class, course);

        // WHEN
        HeadSail result = headSailTrimUtils.calculateHeadSailTrim(boatCourse, windSpeed, waveHeight);

        // THEN
        assertThat(result.getHeadSailSheet(), is(sheetState));
    }
}