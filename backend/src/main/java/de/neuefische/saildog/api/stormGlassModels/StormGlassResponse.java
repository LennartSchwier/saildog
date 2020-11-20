package de.neuefische.saildog.api.stormGlassModels;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StormGlassResponse {

    private ArrayList<Hours> hours;
}
