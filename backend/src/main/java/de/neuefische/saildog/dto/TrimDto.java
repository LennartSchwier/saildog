package de.neuefische.saildog.dto;

import de.neuefische.saildog.enums.*;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class TrimDto {

    private BoomVangState boomVangState;
    private FairLeadState fairLeadState;
    private LuffFootState luffFootState;
    private SheetState sheetState;
    private TravellerState travellerState;
}
