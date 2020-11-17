package de.neuefische.saildog.utils;

import de.neuefische.saildog.enums.WaveState;
import de.neuefische.saildog.enums.WindState;
import de.neuefische.saildog.model.Weather;
import org.springframework.stereotype.Component;

@Component
public class TrimUtils {

    public Weather setWeather(double wind, double wave) {
        if (wind < 7 && wave < 0.5) {
            return new Weather(WindState.LIGHT_WIND, WaveState.NO_WAVES);
        }
        if (wind < 7 && wave >= 0.5) {
            return new Weather(WindState.LIGHT_WIND, WaveState.WAVES);
        }
        if (wind < 18 && wave < 1.0) {
            return new Weather(WindState.MEDIUM_WIND, WaveState.NO_WAVES);
        }
        if (wind < 18 && wave >= 1.0) {
            return new Weather(WindState.MEDIUM_WIND, WaveState.WAVES);
        }
        if (wind >= 18 && wave < 1.5) {
            return new Weather(WindState.STRONG_WIND, WaveState.NO_WAVES);
        }
        if (wind >= 18 && wave >= 1.5) {
            return new Weather(WindState.STRONG_WIND, WaveState.WAVES);
        }
        return null;
    }
}
