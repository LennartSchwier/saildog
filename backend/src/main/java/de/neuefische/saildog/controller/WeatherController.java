package de.neuefische.saildog.controller;

import de.neuefische.saildog.dto.WeatherDto;
import de.neuefische.saildog.service.WeatherService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/weather")
public class WeatherController {

    private final WeatherService weatherService;

    public WeatherController(WeatherService weatherService) {
        this.weatherService = weatherService;
    }

    @GetMapping
    public WeatherDto getWeather() {
        return weatherService.getWeather();
    }
}
