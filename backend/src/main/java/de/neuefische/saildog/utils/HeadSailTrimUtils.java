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
        return switch (boatCourse) {
            case CLOSED_HAULED -> calculateClosedHauled(wind, wave);
            case BEAM_REACH -> calculateBeamReach(wind, wave);
            case WIND_ASTERN -> calculateWindAstern(wind, wave);
        };
    }

    private HeadSail calculateWindAstern(double wind, double wave) {
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
        return new HeadSail();
    }

    private HeadSail calculateBeamReach(double wind, double wave) {
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
        return new HeadSail();
    }

    private HeadSail calculateClosedHauled(double wind, double wave) {
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
        return new HeadSail();
    }
}
