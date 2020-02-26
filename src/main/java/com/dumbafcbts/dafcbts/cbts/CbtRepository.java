package com.dumbafcbts.dafcbts.cbts;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CbtRepository extends JpaRepository<Cbt, Long> {
  Cbt findByName(String name);
}
