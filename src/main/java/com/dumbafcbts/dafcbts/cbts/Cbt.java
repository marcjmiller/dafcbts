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
@Table(name = "data_cbt")
public class Cbt {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;
  
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
  
  public Cbt(long id, String name, String description, String webAddress, String cbtSource) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.webAddress = webAddress;
    this.cbtSource = cbtSource;
  }
}