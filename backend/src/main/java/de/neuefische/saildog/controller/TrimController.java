package de.neuefische.saildog.controller;

import de.neuefische.saildog.dto.EnvironmentDto;
import de.neuefische.saildog.dto.TrimDto;
import de.neuefische.saildog.enums.WindState;
import de.neuefische.saildog.service.TrimService;
import de.neuefische.saildog.utils.EnumUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/trim")
public class TrimController {

    private final TrimService trimService;
    private final EnumUtils enumUtils;

    @Autowired
    public TrimController(TrimService trimService, EnumUtils enumUtils) {
        this.trimService = trimService;
        this.enumUtils = enumUtils;
    }

    @GetMapping(path = "/jib")
    public TrimDto getJibTrim (@RequestParam String wind) {
        WindState windState = enumUtils.getEnum(WindState.class, wind);
        EnvironmentDto environment = new EnvironmentDto();
        return trimService.getJibTrim(environment);
    }

}
