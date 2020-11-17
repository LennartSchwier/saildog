package de.neuefische.saildog.service;

import de.neuefische.saildog.enums.FairLeadState;
import de.neuefische.saildog.enums.LuffFootState;
import de.neuefische.saildog.enums.SheetState;
import de.neuefische.saildog.model.Jib;
import de.neuefische.saildog.utils.EnumUtils;
import de.neuefische.saildog.utils.JibTrimUtils;
import org.junit.jupiter.api.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.junit.jupiter.api.Assertions.*;

class TrimServiceTest {

    @Test
    public void testGetJibTrimReturnsCorrectJib() {
        // GIVEN
        JibTrimUtils jibTrimUtils = new JibTrimUtils();
        EnumUtils enumUtils = new EnumUtils();
        TrimService trimService = new TrimService(jibTrimUtils, enumUtils);

        // WHEN
        Jib result = trimService.getJibTrim(25, 3.2, "BEAM_REACH");

        // THEN
        assertThat(result, is(new Jib(SheetState.SLIGHTLY_LOOSE, FairLeadState.NORMAL, LuffFootState.MEDIUM_CLOSED)));
    }

}