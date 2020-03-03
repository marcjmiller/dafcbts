package com.dumbafcbts.dafcbts.cbts;


import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import javax.persistence.EntityManager;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
public class CbtRepositoryTest {
  @Autowired
  private CbtRepository cbtRepository;
  
  @BeforeEach
  void cleanRepos() {
    cbtRepository.deleteAll();
  }
  
  @Test
  public void whenFindByName_thenReturnCbt() {
    // given
    Cbt cbt = new Cbt(1, "Rest4Dummies", "All about Rest", "http://www.google.com", "Google");
  
    cbtRepository.save(cbt);
    
    // when
    Cbt found = cbtRepository.findByName(cbt.getName());
    
    // then
    assertThat(found.getName())
        .isEqualTo(cbt.getName());
  }
}