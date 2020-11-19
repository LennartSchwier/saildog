package de.neuefische.saildog.service;

import de.neuefische.saildog.enums.*;
import de.neuefische.saildog.model.HeadSail;
import de.neuefische.saildog.model.MainSail;
import de.neuefische.saildog.utils.EnumUtils;
import de.neuefische.saildog.utils.HeadSailTrimUtils;
import de.neuefische.saildog.utils.MainSailTrimUtils;
import org.junit.jupiter.api.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

class TrimServiceTest {

    @Test
    public void testGetHeadSailTrimReturnsCorrectHeadSail() {
        // GIVEN
        HeadSailTrimUtils headSailTrimUtils = new HeadSailTrimUtils();
        EnumUtils enumUtils = new EnumUtils();
        TrimService trimService = new TrimService(headSailTrimUtils, null, enumUtils);

        // WHEN
        HeadSail result = trimService.getHeadSailTrim("BEAM_REACH", 25, 3.2);

        // THEN
        assertThat(result, is(new HeadSail(SheetState.SLIGHTLY_LOOSE, FairLeadState.NORMAL, LuffFootState.MEDIUM_CLOSED)));
    }

    @Test
    public void testGetMainSailTrimReturnsCorrectHeadSail() {
        // GIVEN
        MainSailTrimUtils mainSailTrimUtils = new MainSailTrimUtils();
        EnumUtils enumUtils = new EnumUtils();
        TrimService trimService = new TrimService(null, mainSailTrimUtils, enumUtils);

        // WHEN
        MainSail result = trimService.getMainSailTrim("BEAM_REACH", 25, 3.2);

        // THEN
        assertThat(result, is(
                MainSail.builder()
                        .mainSailSheet(SheetState.SLIGHTLY_LOOSE)
                        .traveller(TravellerState.LEE)
                        .boomVang(BoomVangState.MEDIUM_TIGHT)
                        .mainSailLuff(LuffFootState.SLIGHTLY_CLOSED)
                        .mainSailFoot(LuffFootState.FULL_CLOSED)
                        .build()
        ));
    }

}