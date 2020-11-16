package de.neuefische.saildog.utils;

import org.springframework.stereotype.Component;

@Component
public class EnumUtils {

    public <T extends Enum<T>> T getEnum (Class<T> enumType, String input) {
        try {
            return T.valueOf( enumType, input.toUpperCase());
        }
        catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("Enum does not exist");
        }
    }
}
