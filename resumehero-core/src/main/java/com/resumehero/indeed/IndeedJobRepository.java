package com.resumehero.indeed;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IndeedJobRepository extends CrudRepository<IndeedJob, String> {
}
