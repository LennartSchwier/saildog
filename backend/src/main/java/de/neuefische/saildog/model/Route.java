package de.neuefische.saildog.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "route")
@Builder
public class Route {

    @Id
    private String routeId;
    private String creator;
    private List<Leg> legs;
    private double totalDistance;
}
