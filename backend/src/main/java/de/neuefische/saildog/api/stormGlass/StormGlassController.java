package de.neuefische.saildog.api.stormGlass;

import de.neuefische.saildog.dto.WeatherDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/stormglass")
public class StormGlassController {

    private final StormGlassService stormGlassService;

    @Autowired
    public StormGlassController(StormGlassService stormGlassService) {
        this.stormGlassService = stormGlassService;
    }

    @GetMapping
    public WeatherDto getWeather(@RequestParam String latitude, @RequestParam String longitude) {
        return stormGlassService.getSgWeather(latitude, longitude);
    }
}
