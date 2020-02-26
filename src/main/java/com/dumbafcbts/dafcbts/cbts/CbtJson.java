package com.dumbafcbts.dafcbts.cbts;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CbtJson {
  private String name;
  private String description;
  private String webAddress;
  private String cbtSource;
  
  public CbtJson(String name, String description, String webAddress, String cbtSource) {
    this.name = name;
    this.description = description;
    this.webAddress = webAddress;
    this.cbtSource = cbtSource;
  }
}
