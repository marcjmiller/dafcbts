package com.dumbafcbts.dafcbts.cbts;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Data
@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "cbts")
public class Cbt {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;
  
  private String name;
  private String description;
  private String webAddress;
  private String cbtSource;
  
  public Cbt(CbtJson cbtJson) {
    this.name = cbtJson.getName();
    this.description = cbtJson.getDescription();
    this.webAddress = cbtJson.getWebAddress();
    this.cbtSource = cbtJson.getCbtSource();
  }
  
  public Cbt(String name, String description, String webAddress, String cbtSource) {
    this.name = name;
    this.description = description;
    this.webAddress = webAddress;
    this.cbtSource = cbtSource;
  }
}