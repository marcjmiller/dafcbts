package com.dumbafcbts.dafcbts.cbts;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CbtTest {
  private Cbt cbt;
  private CbtRepository cbtRepository;
  
  @Autowired
  public void setCbtRepository(CbtRepository cbtRepository) {
    this.cbtRepository = cbtRepository;
  }
  
  @BeforeEach
  public void setupTests() {
    cbt = new Cbt(
        "Name",
        "Description",
        "Web Address",
        "CBT Source"
    );
  }
  
  @Test
  public void cbtClassHasAllAttributes() {
    assertEquals(0, cbt.getId());
    assertEquals("Name", cbt.getName());
    assertEquals("Description", cbt.getDescription());
    assertEquals("Web Address", cbt.getWebAddress());
    assertEquals("CBT Source", cbt.getCbtSource());
  }
  
  @Test
  public void cbtGetsAddedToRepo() {
    cbtRepository.save(cbt);
    List<Cbt> cbtList = cbtRepository.findAll();
    
    assertEquals(1, cbtList.size());
  }
}
