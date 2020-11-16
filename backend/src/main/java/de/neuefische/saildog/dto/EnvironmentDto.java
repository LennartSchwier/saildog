package de.neuefische.saildog.dto;

import de.neuefische.saildog.enums.BoatCourse;
import de.neuefische.saildog.enums.WaveState;
import de.neuefische.saildog.enums.WindState;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EnvironmentDto {

    private WindState windState;
    private WaveState waveState;
    private BoatCourse boatCourse;

}
