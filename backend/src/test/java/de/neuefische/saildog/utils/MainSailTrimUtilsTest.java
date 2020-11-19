package de.neuefische.saildog.utils;

import de.neuefische.saildog.enums.BoatCourse;
import de.neuefische.saildog.enums.SheetState;
import de.neuefische.saildog.model.MainSail;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

class MainSailTrimUtilsTest {

    @ParameterizedTest(name = "with wind speed of {0}, wave height of {1} and a course of {2} main sheet trim is {3}")
    @CsvSource({
            "2, 0.0, closed_Hauled, LOOSE",
            "4, 2.0, wind_astern, LOOSE",
            "8, 0.9, beam_reach, SLIGHTLY_TIGHT",
            "12, 2.0, closed_Hauled, MEDIUM_TIGHT",
            "22, 1.3, closed_Hauled, MAX_TIGHT",
            "200, 200, wind_astern, LOOSE"
    })
    public void testCalculateMainSailTrimsReturnsCorrectSheetTrim(
            double windSpeed,
            double waveHeight,
            String course,
            SheetState sheetState) {
        // GIVEN
        EnumUtils enumUtils = new EnumUtils();
        MainSailTrimUtils mainSailTrimUtils = new MainSailTrimUtils();
        BoatCourse boatCourse = enumUtils.getEnum(BoatCourse.class, course);

        // WHEN
        MainSail result = mainSailTrimUtils.calculateMainSailTrim(boatCourse, windSpeed, waveHeight);

        // THEN
        assertThat(result.getMainSailSheet(), is(sheetState));
    }
}