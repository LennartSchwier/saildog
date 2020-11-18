package de.neuefische.saildog.service;

import de.neuefische.saildog.enums.FairLeadState;
import de.neuefische.saildog.enums.LuffFootState;
import de.neuefische.saildog.enums.SheetState;
import de.neuefische.saildog.model.HeadSail;
import de.neuefische.saildog.utils.EnumUtils;
import de.neuefische.saildog.utils.HeadSailTrimUtils;
import org.junit.jupiter.api.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

class TrimServiceTest {

    @Test
    public void testGetHeadSailTrimReturnsCorrectHeadSail() {
        // GIVEN
        HeadSailTrimUtils headSailTrimUtils = new HeadSailTrimUtils();
        EnumUtils enumUtils = new EnumUtils();
        TrimService trimService = new TrimService(headSailTrimUtils, enumUtils);

        // WHEN
        HeadSail result = trimService.getHeadTrim("BEAM_REACH", 25, 3.2);

        // THEN
        assertThat(result, is(new HeadSail(SheetState.SLIGHTLY_LOOSE, FairLeadState.NORMAL, LuffFootState.MEDIUM_CLOSED)));
    }

}