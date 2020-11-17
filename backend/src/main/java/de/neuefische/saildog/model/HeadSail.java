package de.neuefische.saildog.model;

import de.neuefische.saildog.enums.FairLeadState;
import de.neuefische.saildog.enums.LuffFootState;
import de.neuefische.saildog.enums.SheetState;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class HeadSail {

    private SheetState headSailSheet;
    private FairLeadState headSailLead;
    private LuffFootState headSailLuff;
}
