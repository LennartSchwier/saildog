package de.neuefische.saildog.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class WeatherDto {

    private String time;
    private double windSpeed;
    private double waveHeight;

}
