package de.neuefische.saildog.dto;

import de.neuefische.saildog.model.Leg;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RouteDto {

    private Leg leg;
}
