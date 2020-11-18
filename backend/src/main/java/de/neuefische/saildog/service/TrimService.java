package de.neuefische.saildog.service;

import de.neuefische.saildog.enums.BoatCourse;
import de.neuefische.saildog.model.HeadSail;
import de.neuefische.saildog.utils.EnumUtils;
import de.neuefische.saildog.utils.HeadSailTrimUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TrimService {

    private final HeadSailTrimUtils headSailTrimUtils;
    private final EnumUtils enumUtils;

    @Autowired
    public TrimService(HeadSailTrimUtils headSailTrimUtils, EnumUtils enumUtils) {
        this.headSailTrimUtils = headSailTrimUtils;
        this.enumUtils = enumUtils;
    }

    public HeadSail getHeadTrim( String course, double wind, double wave) {
        BoatCourse boatCourse = enumUtils.getEnum(BoatCourse.class, course);
        return headSailTrimUtils.calculateHeadSailTrim(boatCourse, wind, wave);
    }
}
