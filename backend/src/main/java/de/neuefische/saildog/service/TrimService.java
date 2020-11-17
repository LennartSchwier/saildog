package de.neuefische.saildog.service;

import de.neuefische.saildog.model.Jib;
import org.springframework.stereotype.Service;

@Service
public class TrimService {

    public Jib getJibTrim(int wind, int wave, String course) {
        Jib jibToTrim = Jib.builder()
                .build();
        return null;
    }
}
