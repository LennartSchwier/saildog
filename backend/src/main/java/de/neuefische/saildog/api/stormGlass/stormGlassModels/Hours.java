package de.neuefische.saildog.api.stormGlass.stormGlassModels;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Hours {

    private String time;
    private AirTemperature airTemperature;
    private WaterTemperature waterTemperature;
    private Pressure pressure;
    private Visibility visibility;
    private CurrentDirection currentDirection;
    private CurrentSpeed currentSpeed;
    private WaveDirection waveDirection;
    private WaveHeight waveHeight;
    private WindDirection windDirection;
    private WindSpeed windSpeed;
}
