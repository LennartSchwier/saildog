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
    private WaterTemperature waterTemperature = new WaterTemperature(999);
    private Pressure pressure;
    private Visibility visibility;
    private CurrentDirection currentDirection = new CurrentDirection(999);
    private CurrentSpeed currentSpeed = new CurrentSpeed(499.5);
    private WaveDirection waveDirection = new WaveDirection(999);
    private WaveHeight waveHeight = new WaveHeight(999);
    private WindDirection windDirection;
    private WindSpeed windSpeed;
}
