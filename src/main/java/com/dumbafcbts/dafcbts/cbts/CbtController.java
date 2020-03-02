package com.dumbafcbts.dafcbts.cbts;

import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(CbtController.URI)
public class CbtController {
  public static final String URI = "/api";
  private final CbtRepository cbtRepository;
  
  public CbtController(CbtRepository cbtRepository) {
    this.cbtRepository = cbtRepository;
  }

  
  @GetMapping(path = "/cbts")
  public List<Cbt> getCbts() {
    Cbt cbt1 = new Cbt(new CbtJson("CBTs for Dummies", "how to take CBTs", "http://www.google.com", "TheInternet"));
    Cbt cbt2 = new Cbt(new CbtJson("CBTs for Dummies pt 2", "how to take CBTs v2", "http://www.google.com", "TheInternet"));
    List<Cbt> cbtList = new ArrayList<Cbt>();
    cbtList.add(cbt1);
    cbtList.add(cbt2);
    return cbtList;
//    return cbtRepository.findAll();
  }
  
  @PostMapping(path = "/cbts/post")
  public void postCbt(@Valid @RequestBody CbtJson cbtJson) {
    Cbt cbt = new Cbt(cbtJson);
    cbtRepository.save(cbt);
  }
}
