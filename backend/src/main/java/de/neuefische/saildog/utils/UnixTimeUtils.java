package de.neuefische.saildog.utils;

import org.springframework.stereotype.Component;

import java.time.Instant;

@Component
public class UnixTimeUtils {

    public long getUnixTime() {
        return Instant.now().getEpochSecond();
    }

}
