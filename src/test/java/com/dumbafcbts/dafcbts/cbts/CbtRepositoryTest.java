package com.dumbafcbts.dafcbts.cbts;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import javax.persistence.EntityManager;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
public class CbtRepositoryTest {
  @Autowired
  private EntityManager testEntityManager;
  
  @Autowired
  private CbtRepository cbtRepository;
  
  @Test
  public void whenFindByName_thenReturnCbt() {
    // given
    Cbt cbt = new Cbt("Rest4Dummies", "All about Rest", "http://www.google.com", "Google");
    
    testEntityManager.persist(cbt);
    testEntityManager.flush();
    
    // when
    Cbt found = cbtRepository.findByName(cbt.getName());
    
    // then
    assertThat(found.getName())
        .isEqualTo(cbt.getName());
  }
}