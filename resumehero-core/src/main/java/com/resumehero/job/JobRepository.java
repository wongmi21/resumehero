package com.resumehero.job;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobRepository extends CrudRepository<Job, String> {
}
