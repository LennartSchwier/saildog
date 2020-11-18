package de.neuefische.saildog.utils;

import de.neuefische.saildog.enums.*;
import de.neuefische.saildog.model.MainSail;
import org.springframework.stereotype.Component;

@Component
public class MainSailTrimUtils {

    public MainSail calculateMainSailTrim(BoatCourse boatCourse, double wind, double wave){
        if (boatCourse == BoatCourse.CLOSED_HAULED) {
            if (wind < 7 && wave < 0.5) {
                return MainSail
                        .builder()
                        .mainSheet(SheetState.LOOSE)
                        .traveller(TravellerState.SLIGHTLY_LUV)
                        .boomVang(BoomVangState.LOOSE)
                        .mainLuff(LuffFootState.SMOOTH)
                        .mainFoot(LuffFootState.SLIGHTLY_CLOSED)
                        .build();
            }
            if (wind < 7 && wave >= 0.5) {
                return MainSail
                        .builder()
                        .mainSheet(SheetState.LOOSE)
                        .traveller(TravellerState.SLIGHTLY_LUV)
                        .boomVang(BoomVangState.LOOSE)
                        .mainLuff(LuffFootState.SLIGHTLY_CRINKLED)
                        .mainFoot(LuffFootState.SMOOTH)
                        .build();
            }
            if (wind < 18 && wave < 1.0) {
                return MainSail
                        .builder()
                        .mainSheet(SheetState.TIGHT)
                        .traveller(TravellerState.SLIGHTLY_LUV)
                        .boomVang(BoomVangState.LOOSE)
                        .mainLuff(LuffFootState.SLIGHTLY_CLOSED)
                        .mainFoot(LuffFootState.CLOSED)
                        .build();
            }
            if (wind < 18 && wave >= 1.0) {
                return MainSail
                        .builder()
                        .mainSheet(SheetState.MEDIUM_TIGHT)
                        .traveller(TravellerState.MID)
                        .boomVang(BoomVangState.LOOSE)
                        .mainLuff(LuffFootState.SLIGHTLY_CLOSED)
                        .mainFoot(LuffFootState.SLIGHTLY_CLOSED)
                        .build();
            }
            if (wind >= 18 && wave < 1.5) {
                return MainSail
                        .builder()
                        .mainSheet(SheetState.MAX_TIGHT)
                        .traveller(TravellerState.SLIGHTLY_LUV)
                        .boomVang(BoomVangState.LOOSE)
                        .mainLuff(LuffFootState.FULL_CLOSED)
                        .mainFoot(LuffFootState.FULL_CLOSED)
                        .build();
            }
            if (wind >= 18 && wave >= 1.5) {
                return MainSail
                        .builder()
                        .mainSheet(SheetState.TIGHT)
                        .traveller(TravellerState.LEE)
                        .boomVang(BoomVangState.LOOSE)
                        .mainLuff(LuffFootState.FULL_CLOSED)
                        .mainFoot(LuffFootState.FULL_CLOSED)
                        .build();
            }
        }
        if (boatCourse == BoatCourse.BEAM_REACH) {
            if (wind < 7 && wave < 0.5) {
                return MainSail
                        .builder()
                        .mainSheet(SheetState.LOOSE)
                        .traveller(TravellerState.SLIGHTLY_LEE)
                        .boomVang(BoomVangState.LOOSE)
                        .mainLuff(LuffFootState.SMOOTH)
                        .mainFoot(LuffFootState.SMOOTH)
                        .build();
            }
            if (wind < 7 && wave >= 0.5) {
                return MainSail
                        .builder()
                        .mainSheet(SheetState.LOOSE)
                        .traveller(TravellerState.SLIGHTLY_LEE)
                        .boomVang(BoomVangState.LOOSE)
                        .mainLuff(LuffFootState.SLIGHTLY_CRINKLED)
                        .mainFoot(LuffFootState.SMOOTH)
                        .build();
            }
            if (wind < 18 && wave < 1.0) {
                return MainSail
                        .builder()
                        .mainSheet(SheetState.SLIGHTLY_TIGHT)
                        .traveller(TravellerState.MID)
                        .boomVang(BoomVangState.MEDIUM_TIGHT)
                        .mainLuff(LuffFootState.SLIGHTLY_CRINKLED)
                        .mainFoot(LuffFootState.SMOOTH)
                        .build();
            }
            if (wind < 18 && wave >= 1.0) {
                return MainSail
                        .builder()
                        .mainSheet(SheetState.MEDIUM_TIGHT)
                        .traveller(TravellerState.SLIGHTLY_LEE)
                        .boomVang(BoomVangState.MEDIUM_TIGHT)
                        .mainLuff(LuffFootState.SMOOTH)
                        .mainFoot(LuffFootState.SMOOTH)
                        .build();
            }
            if (wind >= 18 && wave < 1.5) {
                return MainSail
                        .builder()
                        .mainSheet(SheetState.MEDIUM_LOOSE)
                        .traveller(TravellerState.SLIGHTLY_LEE)
                        .boomVang(BoomVangState.TIGHT)
                        .mainLuff(LuffFootState.SLIGHTLY_CLOSED)
                        .mainFoot(LuffFootState.CLOSED)
                        .build();
            }
            if (wind >= 18 && wave >= 1.5) {
                return MainSail
                        .builder()
                        .mainSheet(SheetState.SLIGHTLY_LOOSE)
                        .traveller(TravellerState.LEE)
                        .boomVang(BoomVangState.MEDIUM_TIGHT)
                        .mainLuff(LuffFootState.SLIGHTLY_CLOSED)
                        .mainFoot(LuffFootState.FULL_CLOSED)
                        .build();
            }
        }
        if (boatCourse == BoatCourse.WIND_ASTERN) {
            if (wind < 7 && wave < 0.5) {
                return MainSail
                        .builder()
                        .mainSheet(SheetState.LOOSE)
                        .traveller(TravellerState.LEE)
                        .boomVang(BoomVangState.LOOSE)
                        .mainLuff(LuffFootState.SMOOTH)
                        .mainFoot(LuffFootState.LOOSE)
                        .build();
            }
            if (wind < 7 && wave >= 0.5) {
                return MainSail
                        .builder()
                        .mainSheet(SheetState.LOOSE)
                        .traveller(TravellerState.LEE)
                        .boomVang(BoomVangState.SLIGHTLY_TIGHT)
                        .mainLuff(LuffFootState.SLIGHTLY_CRINKLED)
                        .mainFoot(LuffFootState.LOOSE)
                        .build();
            }
            if (wind < 18 && wave < 1.0) {
                return MainSail
                        .builder()
                        .mainSheet(SheetState.LOOSE)
                        .traveller(TravellerState.LEE)
                        .boomVang(BoomVangState.TIGHT)
                        .mainLuff(LuffFootState.SLIGHTLY_CRINKLED)
                        .mainFoot(LuffFootState.LOOSE)
                        .build();
            }
            if (wind < 18 && wave >= 1.0) {
                return MainSail
                        .builder()
                        .mainSheet(SheetState.LOOSE)
                        .traveller(TravellerState.LEE)
                        .boomVang(BoomVangState.TIGHT)
                        .mainLuff(LuffFootState.SMOOTH)
                        .mainFoot(LuffFootState.LOOSE)
                        .build();
            }
            if (wind >= 18 && wave < 1.5) {
                return MainSail
                        .builder()
                        .mainSheet(SheetState.LOOSE)
                        .traveller(TravellerState.LEE)
                        .boomVang(BoomVangState.MAX_TIGHT)
                        .mainLuff(LuffFootState.SMOOTH)
                        .mainFoot(LuffFootState.SLIGHTLY_CLOSED)
                        .build();
            }
            if (wind >= 18 && wave >= 1.5) {
                return MainSail
                        .builder()
                        .mainSheet(SheetState.LOOSE)
                        .traveller(TravellerState.LEE)
                        .boomVang(BoomVangState.MAX_TIGHT)
                        .mainLuff(LuffFootState.SMOOTH)
                        .mainFoot(LuffFootState.SLIGHTLY_CLOSED)
                        .build();
            }
        }
        return new MainSail();
    }
}
