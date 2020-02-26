package com.dumbafcbts.dafcbts.cbts;

import com.dumbafcbts.dafcbts.BaseIntegrationTest;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import static io.restassured.RestAssured.given;
import static org.junit.jupiter.api.Assertions.assertEquals;


class CbtControllerTest extends BaseIntegrationTest {
  @Autowired
  private CbtRepository cbtRepository;
  
  @Test
  void getCbtsReturnsProperStatusCode() {
    given()
        .port(port)
        .header("Content-Type", "application/json")
        .when()
        .get(CbtController.URI + "/cbts")
        .then()
        .statusCode(200);
  }
  
  @Test
  void postCbtReturnsStatusCodeAndAddsCbtToRepo() {
    String cbtJsonString = "{" +
                               "\"name\":\"CBTs for dummies\"," +
                               "\"description\":\"How to solve CBTs for dummies\"," +
                               "\"webAddress\":\"http://www.google.com\"," +
                               "\"cbtSource\":\"TheInternet\"" +
                           "}";
    
    given()
        .port(port)
        .header("Content-Type", "application/json")
        .body(cbtJsonString)
        .when()
        .post(CbtController.URI + "/cbts/post")
        .then()
        .statusCode(200);
  
    assertEquals(1, cbtRepository.findAll().size());
    assertEquals("CBTs for dummies", cbtRepository.findAll().get(0).getName());
    assertEquals("How to solve CBTs for dummies", cbtRepository.findAll().get(0).getDescription());
    assertEquals("http://www.google.com", cbtRepository.findAll().get(0).getWebAddress());
    assertEquals("TheInternet", cbtRepository.findAll().get(0).getCbtSource());
  }
}