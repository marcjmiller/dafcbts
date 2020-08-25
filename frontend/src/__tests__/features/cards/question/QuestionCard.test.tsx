import { CardHeader } from "@material-ui/core";
import { QuestionModel } from "../../../../models/QuestionModel";
import { shallow } from "enzyme";
import QuestionCard from "../../../../features/cards/question/QuestionCard";
import React from "react";

describe('Question Card tests', () => {
  const question = new QuestionModel(1, 1, 'What is love?');

  const testSubject = shallow(<QuestionCard question={question} />);

  it('should render all data given to it', () => {
    expect(testSubject.find(CardHeader).prop('title')).toEqual('What is love?');
  });
});
