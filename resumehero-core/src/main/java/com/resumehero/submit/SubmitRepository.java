package com.resumehero.submit;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubmitRepository extends CrudRepository<Submit, Long> {
}
