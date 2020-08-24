package com.dumbafcbts.dafcbts.question;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Data
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "data_question")
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Long cbtId;
    private String text;

    public Question(QuestionJson questionJson) {
        this.cbtId = questionJson.getCbtId();
        this.text = questionJson.getText();
    }
}