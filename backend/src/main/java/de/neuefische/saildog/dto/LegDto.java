package de.neuefische.saildog.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LegDto {

    private String startLatitude;
    private String startLongitude;
    private String endLatitude;
    private String endLongitude;
}
