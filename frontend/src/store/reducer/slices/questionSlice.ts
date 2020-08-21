import { QuestionModel } from '../../../models/QuestionModel';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QuestionState {
  questions: QuestionModel[];
  error: Error | null;
  loading: boolean;
}

const initialState: QuestionState = {
  questions: [],
  error: null,
  loading: true,
};

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    getQuestionsSuccess(state, action: PayloadAction<QuestionModel[]>) {
      state.questions = action.payload;
      state.loading = false;
    },

    getQuestionsFailed(state, action: PayloadAction<Error>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { getQuestionsSuccess, getQuestionsFailed } = questionSlice.actions;

export default questionSlice.reducer;

export const InitQuestionState = initialState;
