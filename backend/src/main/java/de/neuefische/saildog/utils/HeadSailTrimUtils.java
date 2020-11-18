package de.neuefische.saildog.utils;

import de.neuefische.saildog.enums.BoatCourse;
import de.neuefische.saildog.enums.FairLeadState;
import de.neuefische.saildog.enums.LuffFootState;
import de.neuefische.saildog.enums.SheetState;
import de.neuefische.saildog.model.HeadSail;
import org.springframework.stereotype.Component;

@Component
public class HeadSailTrimUtils {

    public HeadSail calculateHeadSailTrim(BoatCourse boatCourse, double wind, double wave) {
        if (boatCourse == BoatCourse.CLOSED_HAULED) {
            if (wind < 7 && wave < 0.5) {
                return new HeadSail(
                        SheetState.LOOSE,
                        FairLeadState.SLIGHTLY_FORWARD,
                        LuffFootState.SLIGHTLY_SMOOTH
                );
            }
            if (wind < 7 && wave >= 0.5) {
                return new HeadSail(
                        SheetState.LOOSE,
                        FairLeadState.SLIGHTLY_FORWARD,
                        LuffFootState.SLIGHTLY_CRINKLED
                );
            }
            if (wind < 18 && wave < 1.0) {
                return new HeadSail(
                        SheetState.TIGHT,
                        FairLeadState.NORMAL,
                        LuffFootState.SMOOTH
                );
            }
            if (wind < 18 && wave >= 1.0) {
                return new HeadSail(
                        SheetState.MEDIUM_TIGHT,
                        FairLeadState.NORMAL,
                        LuffFootState.SLIGHTLY_CRINKLED
                );
            }
            if (wind >= 18 && wave < 1.5) {
                return new HeadSail(
                        SheetState.MAX_TIGHT,
                        FairLeadState.SLIGHTLY_AFT,
                        LuffFootState.CLOSED
                );
            }
            if (wind >= 18 && wave >= 1.5) {
                return new HeadSail(
                        SheetState.MAX_TIGHT,
                        FairLeadState.SLIGHTLY_AFT,
                        LuffFootState.CLOSED
                );
            }
        }
        if (boatCourse == BoatCourse.BEAM_REACH) {
            if (wind < 7 && wave < 0.5) {
                return new HeadSail(
                        SheetState.LOOSE,
                        FairLeadState.SLIGHTLY_FORWARD,
                        LuffFootState.SLIGHTLY_CRINKLED
                );
            }
            if (wind < 7 && wave >= 0.5) {
                return new HeadSail(
                        SheetState.LOOSE,
                        FairLeadState.SLIGHTLY_FORWARD,
                        LuffFootState.SLIGHTLY_CRINKLED
                );
            }
            if (wind < 18 && wave < 1.0) {
                return new HeadSail(
                        SheetState.MEDIUM_LOOSE,
                        FairLeadState.FORWARD,
                        LuffFootState.SMOOTH
                );
            }
            if (wind < 18 && wave >= 1.0) {
                return new HeadSail(
                        SheetState.MEDIUM_LOOSE,
                        FairLeadState.FORWARD,
                        LuffFootState.SLIGHTLY_CRINKLED
                );
            }
            if (wind >= 18 && wave < 1.5) {
                return new HeadSail(
                        SheetState.MEDIUM_TIGHT,
                        FairLeadState.NORMAL,
                        LuffFootState.MEDIUM_CLOSED
                );
            }
            if (wind >= 18 && wave >= 1.5) {
                return new HeadSail(
                        SheetState.SLIGHTLY_LOOSE,
                        FairLeadState.NORMAL,
                        LuffFootState.MEDIUM_CLOSED
                );
            }
        }
        if (boatCourse == BoatCourse.WIND_ASTERN) {
            if (wind < 7 && wave < 0.5) {
                return new HeadSail(
                        SheetState.LOOSE,
                        FairLeadState.FORWARD,
                        LuffFootState.FULL_LOOSE
                );
            }
            if (wind < 7 && wave >= 0.5) {
                return new HeadSail(
                        SheetState.LOOSE,
                        FairLeadState.FORWARD,
                        LuffFootState.FULL_LOOSE
                );
            }
            if (wind < 18 && wave < 1.0) {
                return new HeadSail(
                        SheetState.LOOSE,
                        FairLeadState.FORWARD,
                        LuffFootState.SLIGHTLY_CRINKLED
                );
            }
            if (wind < 18 && wave >= 1.0) {
                return new HeadSail(
                        SheetState.LOOSE,
                        FairLeadState.FORWARD,
                        LuffFootState.SLIGHTLY_CRINKLED
                );
            }
            if (wind >= 18 && wave < 1.5) {
                return new HeadSail(
                        SheetState.LOOSE,
                        FairLeadState.NORMAL,
                        LuffFootState.SLIGHTLY_CRINKLED
                );
            }
            if (wind >= 18 && wave >= 1.5) {
                return new HeadSail(
                        SheetState.LOOSE,
                        FairLeadState.NORMAL,
                        LuffFootState.SLIGHTLY_CRINKLED
                );
            }
        }
        return new HeadSail();
    }
}
