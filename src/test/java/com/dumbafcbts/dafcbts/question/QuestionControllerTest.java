package com.dumbafcbts.dafcbts.question;

import com.dumbafcbts.dafcbts.BaseIntegrationTest;

import static io.restassured.RestAssured.given;

import org.junit.jupiter.api.Test;


public class QuestionControllerTest extends BaseIntegrationTest {
  // @Autowired
  // private QuestionRepository questionRepository;

  @Test
  void getQuestionsReturnsProperStatusCode() {
    given()
    .port(port)
    .header("Content-Type", "application/json")
    .when()
    .get(QuestionController.URI + "questions?cbtId=2")
    .then()
    .statusCode(200);
  }
}