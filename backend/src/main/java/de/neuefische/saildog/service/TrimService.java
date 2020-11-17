package de.neuefische.saildog.service;

import de.neuefische.saildog.enums.BoatCourse;
import de.neuefische.saildog.model.Jib;
import de.neuefische.saildog.utils.EnumUtils;
import de.neuefische.saildog.utils.JibTrimUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TrimService {

    private final JibTrimUtils jibTrimUtils;
    private final EnumUtils enumUtils;

    @Autowired
    public TrimService(JibTrimUtils jibTrimUtils, EnumUtils enumUtils) {
        this.jibTrimUtils = jibTrimUtils;
        this.enumUtils = enumUtils;
    }

    public Jib getJibTrim(double wind, double wave, String course) {
        BoatCourse boatCourse = enumUtils.getEnum(BoatCourse.class, course);
        return jibTrimUtils.calculateJibTrim(wind, wave, boatCourse);
    }
}
