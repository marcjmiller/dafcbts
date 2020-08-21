package com.dumbafcbts.dafcbts.question;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class QuestionJson {
    private Long id;
    private Long cbtId;
    private String text;
}