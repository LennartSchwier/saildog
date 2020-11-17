package de.neuefische.saildog.model;

import de.neuefische.saildog.enums.WaveState;
import de.neuefische.saildog.enums.WindState;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Weather {

    private WindState windState;
    private WaveState waveState;

}
