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
                        .mainSailSheet(SheetState.LOOSE)
                        .traveller(TravellerState.SLIGHTLY_LUV)
                        .boomVang(BoomVangState.LOOSE)
                        .mainSailLuff(LuffFootState.SMOOTH)
                        .mainSailFoot(LuffFootState.SLIGHTLY_CLOSED)
                        .build();
            }
            if (wind < 7 && wave >= 0.5) {
                return MainSail
                        .builder()
                        .mainSailSheet(SheetState.LOOSE)
                        .traveller(TravellerState.SLIGHTLY_LUV)
                        .boomVang(BoomVangState.LOOSE)
                        .mainSailLuff(LuffFootState.SLIGHTLY_CRINKLED)
                        .mainSailFoot(LuffFootState.SMOOTH)
                        .build();
            }
            if (wind < 18 && wave < 1.0) {
                return MainSail
                        .builder()
                        .mainSailSheet(SheetState.TIGHT)
                        .traveller(TravellerState.SLIGHTLY_LUV)
                        .boomVang(BoomVangState.LOOSE)
                        .mainSailLuff(LuffFootState.SLIGHTLY_CLOSED)
                        .mainSailFoot(LuffFootState.CLOSED)
                        .build();
            }
            if (wind < 18 && wave >= 1.0) {
                return MainSail
                        .builder()
                        .mainSailSheet(SheetState.MEDIUM_TIGHT)
                        .traveller(TravellerState.MID)
                        .boomVang(BoomVangState.LOOSE)
                        .mainSailLuff(LuffFootState.SLIGHTLY_CLOSED)
                        .mainSailFoot(LuffFootState.SLIGHTLY_CLOSED)
                        .build();
            }
            if (wind >= 18 && wave < 1.5) {
                return MainSail
                        .builder()
                        .mainSailSheet(SheetState.MAX_TIGHT)
                        .traveller(TravellerState.SLIGHTLY_LUV)
                        .boomVang(BoomVangState.LOOSE)
                        .mainSailLuff(LuffFootState.FULL_CLOSED)
                        .mainSailFoot(LuffFootState.FULL_CLOSED)
                        .build();
            }
            if (wind >= 18 && wave >= 1.5) {
                return MainSail
                        .builder()
                        .mainSailSheet(SheetState.TIGHT)
                        .traveller(TravellerState.LEE)
                        .boomVang(BoomVangState.LOOSE)
                        .mainSailLuff(LuffFootState.FULL_CLOSED)
                        .mainSailFoot(LuffFootState.FULL_CLOSED)
                        .build();
            }
        }
        if (boatCourse == BoatCourse.BEAM_REACH) {
            if (wind < 7 && wave < 0.5) {
                return MainSail
                        .builder()
                        .mainSailSheet(SheetState.LOOSE)
                        .traveller(TravellerState.SLIGHTLY_LEE)
                        .boomVang(BoomVangState.LOOSE)
                        .mainSailLuff(LuffFootState.SMOOTH)
                        .mainSailFoot(LuffFootState.SMOOTH)
                        .build();
            }
            if (wind < 7 && wave >= 0.5) {
                return MainSail
                        .builder()
                        .mainSailSheet(SheetState.LOOSE)
                        .traveller(TravellerState.SLIGHTLY_LEE)
                        .boomVang(BoomVangState.LOOSE)
                        .mainSailLuff(LuffFootState.SLIGHTLY_CRINKLED)
                        .mainSailFoot(LuffFootState.SMOOTH)
                        .build();
            }
            if (wind < 18 && wave < 1.0) {
                return MainSail
                        .builder()
                        .mainSailSheet(SheetState.SLIGHTLY_TIGHT)
                        .traveller(TravellerState.MID)
                        .boomVang(BoomVangState.MEDIUM_TIGHT)
                        .mainSailLuff(LuffFootState.SLIGHTLY_CRINKLED)
                        .mainSailFoot(LuffFootState.SMOOTH)
                        .build();
            }
            if (wind < 18 && wave >= 1.0) {
                return MainSail
                        .builder()
                        .mainSailSheet(SheetState.MEDIUM_TIGHT)
                        .traveller(TravellerState.SLIGHTLY_LEE)
                        .boomVang(BoomVangState.MEDIUM_TIGHT)
                        .mainSailLuff(LuffFootState.SMOOTH)
                        .mainSailFoot(LuffFootState.SMOOTH)
                        .build();
            }
            if (wind >= 18 && wave < 1.5) {
                return MainSail
                        .builder()
                        .mainSailSheet(SheetState.MEDIUM_LOOSE)
                        .traveller(TravellerState.SLIGHTLY_LEE)
                        .boomVang(BoomVangState.TIGHT)
                        .mainSailLuff(LuffFootState.SLIGHTLY_CLOSED)
                        .mainSailFoot(LuffFootState.CLOSED)
                        .build();
            }
            if (wind >= 18 && wave >= 1.5) {
                return MainSail
                        .builder()
                        .mainSailSheet(SheetState.SLIGHTLY_LOOSE)
                        .traveller(TravellerState.LEE)
                        .boomVang(BoomVangState.MEDIUM_TIGHT)
                        .mainSailLuff(LuffFootState.SLIGHTLY_CLOSED)
                        .mainSailFoot(LuffFootState.FULL_CLOSED)
                        .build();
            }
        }
        if (boatCourse == BoatCourse.WIND_ASTERN) {
            if (wind < 7 && wave < 0.5) {
                return MainSail
                        .builder()
                        .mainSailSheet(SheetState.LOOSE)
                        .traveller(TravellerState.LEE)
                        .boomVang(BoomVangState.LOOSE)
                        .mainSailLuff(LuffFootState.SMOOTH)
                        .mainSailFoot(LuffFootState.LOOSE)
                        .build();
            }
            if (wind < 7 && wave >= 0.5) {
                return MainSail
                        .builder()
                        .mainSailSheet(SheetState.LOOSE)
                        .traveller(TravellerState.LEE)
                        .boomVang(BoomVangState.SLIGHTLY_TIGHT)
                        .mainSailLuff(LuffFootState.SLIGHTLY_CRINKLED)
                        .mainSailFoot(LuffFootState.LOOSE)
                        .build();
            }
            if (wind < 18 && wave < 1.0) {
                return MainSail
                        .builder()
                        .mainSailSheet(SheetState.LOOSE)
                        .traveller(TravellerState.LEE)
                        .boomVang(BoomVangState.TIGHT)
                        .mainSailLuff(LuffFootState.SLIGHTLY_CRINKLED)
                        .mainSailFoot(LuffFootState.LOOSE)
                        .build();
            }
            if (wind < 18 && wave >= 1.0) {
                return MainSail
                        .builder()
                        .mainSailSheet(SheetState.LOOSE)
                        .traveller(TravellerState.LEE)
                        .boomVang(BoomVangState.TIGHT)
                        .mainSailLuff(LuffFootState.SMOOTH)
                        .mainSailFoot(LuffFootState.LOOSE)
                        .build();
            }
            if (wind >= 18 && wave < 1.5) {
                return MainSail
                        .builder()
                        .mainSailSheet(SheetState.LOOSE)
                        .traveller(TravellerState.LEE)
                        .boomVang(BoomVangState.MAX_TIGHT)
                        .mainSailLuff(LuffFootState.SMOOTH)
                        .mainSailFoot(LuffFootState.SLIGHTLY_CLOSED)
                        .build();
            }
            if (wind >= 18 && wave >= 1.5) {
                return MainSail
                        .builder()
                        .mainSailSheet(SheetState.LOOSE)
                        .traveller(TravellerState.LEE)
                        .boomVang(BoomVangState.MAX_TIGHT)
                        .mainSailLuff(LuffFootState.SMOOTH)
                        .mainSailFoot(LuffFootState.SLIGHTLY_CLOSED)
                        .build();
            }
        }
        return new MainSail();
    }
}
