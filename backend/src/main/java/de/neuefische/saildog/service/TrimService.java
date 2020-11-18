package de.neuefische.saildog.service;

import de.neuefische.saildog.enums.BoatCourse;
import de.neuefische.saildog.model.HeadSail;
import de.neuefische.saildog.model.MainSail;
import de.neuefische.saildog.utils.EnumUtils;
import de.neuefische.saildog.utils.HeadSailTrimUtils;
import de.neuefische.saildog.utils.MainSailTrimUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TrimService {

    private final HeadSailTrimUtils headSailTrimUtils;
    private final MainSailTrimUtils mainSailTrimUtils;
    private final EnumUtils enumUtils;

    @Autowired
    public TrimService(HeadSailTrimUtils headSailTrimUtils, MainSailTrimUtils mainSailTrimUtils, EnumUtils enumUtils) {
        this.headSailTrimUtils = headSailTrimUtils;
        this.mainSailTrimUtils = mainSailTrimUtils;
        this.enumUtils = enumUtils;
    }

    public HeadSail getHeadSailTrim(String course, double wind, double wave) {
        BoatCourse boatCourse = enumUtils.getEnum(BoatCourse.class, course);
        return headSailTrimUtils.calculateHeadSailTrim(boatCourse, wind, wave);
    }

    public MainSail getMainSailTrim(String course, double wind, double wave) {
        BoatCourse boatCourse = enumUtils.getEnum(BoatCourse.class, course);
        return mainSailTrimUtils.calculateMainSailTrim(boatCourse, wind, wave);
    }
}
