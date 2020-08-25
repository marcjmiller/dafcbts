import { QuestionModel } from '../../../../../../.history/frontend/src/models/QuestionModel_20200821143751';
import { getQuestionsSuccess } from '../../../../store/reducer/slices/questionSlice';
import { store } from '../../../../store';
import QuestionDashboard from '../../../../features/dashboard/question/QuestionDashboard';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import React from 'react';
import QuestionCard from '../../../../features/cards/question/QuestionCard';

describe('Question Card Tests', () => {
  it('should render Question cards for each Question from the backend', () => {
    const data = [new QuestionModel(1, 1, 'Question1'), new QuestionModel(2, 1, 'Question2')];

    store.dispatch(getQuestionsSuccess(data));

    const testSubject = mount(
      <Provider store={store}>
        <QuestionDashboard />
      </Provider>,
    );

    expect(testSubject.find(QuestionCard).exists()).toBeTruthy();
    expect(testSubject.find(QuestionCard).length).toBe(2);
  });
});
