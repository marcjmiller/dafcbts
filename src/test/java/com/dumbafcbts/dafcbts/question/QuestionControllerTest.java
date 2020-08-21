package com.dumbafcbts.dafcbts.question;

import com.dumbafcbts.dafcbts.BaseIntegrationTest;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

public class QuestionControllerTest extends BaseIntegrationTest {
  @Autowired
  private QuestionRepository questionRepository;

  @Test
  void getQuestionsReturnsProperStatusCode() {
    given()
    .port(port)
    .header("Content-Type", "application/json")
    .when()
    .get(QuestionController.URI)
    .then()
    .statusCode(200);
  }
}