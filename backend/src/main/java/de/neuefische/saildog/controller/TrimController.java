package de.neuefische.saildog.controller;

import de.neuefische.saildog.model.HeadSail;
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
    public HeadSail getHeadSailTrim (@RequestParam double wind, @RequestParam double wave, @RequestParam String course) {
        return trimService.getHeadTrim(wind, wave, course);
    }

}
