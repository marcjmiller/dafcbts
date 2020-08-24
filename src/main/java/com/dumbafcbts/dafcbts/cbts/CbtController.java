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
    List<Cbt> cbts = new ArrayList<Cbt>();
    
    cbts.add(new Cbt(1L, "Test CBT Please Ignore", "Its a test", "www.google.com", "Internet"));
    cbts.add(new Cbt(2L, "Ignore me too", "Another test", "www.ask.com", "Internet"));
    cbts.add(new Cbt(3L, "Hello there", "Yet another test", "www.yahoo.com", "Internet"));
    cbts.add(new Cbt(4L, "IA Awareness", "You guessed it, a test", "www.duckduckgo.com", "Internet"));
    
    cbtRepository.saveAll(cbts);
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
