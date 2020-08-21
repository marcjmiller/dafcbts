package com.dumbafcbts.dafcbts.question;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class QuestionTest {
  private Question question;

  @BeforeEach
  public void setupTests() {
    question = new Question(new QuestionJson(0L, 1L, "Question Text"));
  }

  @Test
  void questionClassHasAllAttributes() {
    assertEquals(0L, question.getId());
    assertEquals(1L, question.getCbtId());
    assertEquals("Question Text", question.getText());
  }
}