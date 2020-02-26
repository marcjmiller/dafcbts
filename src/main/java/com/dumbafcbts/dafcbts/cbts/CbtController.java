package com.dumbafcbts.dafcbts.cbts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
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
    return cbtRepository.findAll();
  }
  
  @PostMapping(path = "/cbts/post")
  public void postCbt(@Valid @RequestBody CbtJson cbtJson) {
    Cbt cbt = new Cbt(cbtJson);
    cbtRepository.save(cbt);
  }
}
