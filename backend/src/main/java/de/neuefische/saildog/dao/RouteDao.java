package de.neuefische.saildog.dao;

import de.neuefische.saildog.model.Route;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface RouteDao extends PagingAndSortingRepository<Route, String> {

    List<Route> findAll();
    List<Route> findAllByCreator(String creator);
}
