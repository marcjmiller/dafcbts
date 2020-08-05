package com.dumbafcbts.dafcbts.cbts;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CbtTest {
  private Cbt cbt;
  
  @BeforeEach
  public void setupTests() {
    cbt = new Cbt(
        0,
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
}
