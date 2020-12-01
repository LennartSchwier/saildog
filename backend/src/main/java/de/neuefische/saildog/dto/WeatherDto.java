package de.neuefische.saildog.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class WeatherDto {

    private String time;
    private double airTemperature;
    private double waterTemperature;
    private double pressure;
    private double visibility;
    private double currentDirection;
    private double currentSpeed;
    private double windDirection;
    private double windSpeed;
    private double waveDirection;
    private double waveHeight;

}
