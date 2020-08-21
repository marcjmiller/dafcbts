package com.dumbafcbts.dafcbts.cbt;

import com.dumbafcbts.dafcbts.BaseIntegrationTest;
import com.dumbafcbts.dafcbts.cbts.CbtController;
import com.dumbafcbts.dafcbts.cbts.CbtRepository;

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
    int sizeRepoPrior = cbtRepository.findAll().size();

    String cbtJsonString = "{" + "\"name\":\"CBTs for dummies\"," + "\"description\":\"How to solve CBTs for dummies\","
        + "\"webAddress\":\"http://www.google.com\"," + "\"cbtSource\":\"TheInternet\"" + "}";

    given()
      .port(port)
      .header("Content-Type", "application/json")
      .body(cbtJsonString)
      .when()
      .post(CbtController.URI + "/cbts/post")
      .then()
      .statusCode(200);

    int sizeRepoAfter = cbtRepository.findAll().size();

    assertEquals(1, sizeRepoAfter - sizeRepoPrior);
    assertEquals("CBTs for dummies", cbtRepository.findAll().get(sizeRepoAfter - 1).getName());
    assertEquals("How to solve CBTs for dummies", cbtRepository.findAll().get(sizeRepoAfter - 1).getDescription());
    assertEquals("http://www.google.com", cbtRepository.findAll().get(sizeRepoAfter - 1).getWebAddress());
    assertEquals("TheInternet", cbtRepository.findAll().get(sizeRepoAfter - 1).getCbtSource());
  }
}