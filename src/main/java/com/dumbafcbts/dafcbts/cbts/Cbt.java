package com.dumbafcbts.dafcbts.cbts;

public class Cbt {
  private long id;
  private String name;
  private String description;
  private String webAddress;
  private String cbtSource;
  
  public Cbt(String name, String description, String webAddress, String cbtSource) {
    this.name = name;
    this.description = description;
    this.webAddress = webAddress;
    this.cbtSource = cbtSource;
  }
  
  public long getId() {
    return id;
  }
  
  public void setId(long id) {
    this.id = id;
  }
  
  public String getName() {
    return name;
  }
  
  public void setName(String name) {
    this.name = name;
  }
  
  public String getDescription() {
    return description;
  }
  
  public void setDescription(String description) {
    this.description = description;
  }
  
  public String getWebAddress() {
    return webAddress;
  }
  
  public void setWebAddress(String webAddress) {
    this.webAddress = webAddress;
  }
  
  public String getCbtSource() {
    return cbtSource;
  }
  
  public void setCbtSource(String cbtSource) {
    this.cbtSource = cbtSource;
  }
  
}