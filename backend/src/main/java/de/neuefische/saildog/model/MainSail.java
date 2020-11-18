package de.neuefische.saildog.model;

import de.neuefische.saildog.enums.BoomVangState;
import de.neuefische.saildog.enums.LuffFootState;
import de.neuefische.saildog.enums.SheetState;
import de.neuefische.saildog.enums.TravellerState;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MainSail {

    private SheetState mainSailSheet;
    private TravellerState traveller;
    private BoomVangState boomVang;
    private LuffFootState mainSailLuff;
    private LuffFootState mainSailFoot;

}
