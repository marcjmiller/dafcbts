package com.dumbafcbts.dafcbts.question;

import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(QuestionController.URI)
public class QuestionController {
    public final static String URI = "/api";
    
    private final QuestionRepository questionRepository;

    public QuestionController(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
        List<Question> questions = new ArrayList<Question>();

        questions.add(new Question(1L, 1L, "What is love?"));
        questions.add(new Question(2L, 2L, "Baby don't hurt me?"));
        questions.add(new Question(3L, 2L, "Don't hurt me?"));
        questions.add(new Question(4L, 4L, "No more?"));

        questionRepository.saveAll(questions);
    }

    @GetMapping(value="/questions")
    public List<Question> getQuestions(@Valid @RequestParam String cbtId) {
        return questionRepository.findByCbtId(Long.parseLong(cbtId));
    }
}