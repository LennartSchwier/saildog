package de.neuefische.saildog.controller;

import de.neuefische.saildog.model.HeadSail;
import de.neuefische.saildog.model.MainSail;
import de.neuefische.saildog.service.TrimService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/trim")
public class TrimController {

    private final TrimService trimService;

    @Autowired
    public TrimController(TrimService trimService) {
        this.trimService = trimService;
    }

    @GetMapping(path = "/headsail")
    public HeadSail getHeadSailTrim (@RequestParam String course, @RequestParam double wind, @RequestParam double wave) {
        return trimService.getHeadSailTrim(course, wind, wave);
    }
}
