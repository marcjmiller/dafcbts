import reducer, { InitQuestionState, getQuestionsSuccess, getQuestionsFailed } from '../../store/reducer/slices/questionSlice';
import { QuestionModel } from '../../models/QuestionModel';

describe('QuestionReducer tests', () => {
  it('should return an initial state', () => {
    const result = reducer(undefined, { type: '' });

    expect(result).toEqual(InitQuestionState);
  });

  it('should load questions when returned from the API', () => {
    const data = [
      new QuestionModel(1, 1, 'This is a question'),
      new QuestionModel(2, 1, 'This is also a question'),
      new QuestionModel(3, 1, 'This is a third question'),
      new QuestionModel(4, 1, 'This is a question for a second cbt'),
    ];
    const nextState = reducer(InitQuestionState, getQuestionsSuccess(data));

    expect(nextState.questions).toEqual(data);
    expect(nextState.loading).toEqual(false);
    expect(nextState.error).toBeNull();
  });

  it('should send Error messages to state on error', () => {
    const data = new Error('This is a Question error message');
    const nextState = reducer(InitQuestionState, getQuestionsFailed(data));

    expect(nextState.questions).toEqual([]);
    expect(nextState.loading).toEqual(false);
    expect(nextState.error).toEqual(data);
  });
});
