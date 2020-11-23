package de.neuefische.saildog.dao;

import de.neuefische.saildog.model.SailDogUser;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface UserDao extends PagingAndSortingRepository<SailDogUser, String> {
}
