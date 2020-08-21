import { QuestionModel } from './../../../../.history/frontend/src/models/QuestionModel_20200821143751';
import { getCbtsFailed, getCbtsSuccess } from '../reducer/slices/cbtSlice';
import { AppDispatch, AppThunk } from '../../resources/types';
import { CbtModel } from '../../models/CbtModel';
import { AxiosResponse } from 'axios';
import { getQuestionsFailed, getQuestionsSuccess } from '../reducer/slices/questionSlice';

const axios = require('axios').default;

export function getCbts(): CbtModel[] {
  const url = 'api/cbts';
  return axios.get(url).then((response: AxiosResponse) => {
    return response.data;
  });
}

export function getQuestions(cbtId: number): QuestionModel[] {
  const url = `api/questions?cbtId=${cbtId}`;
  return axios.get(url).then((response: AxiosResponse) => {
    return response.data;
  });
}

export const fetchAllCbts = (): AppThunk => async (dispatch: AppDispatch) => {
  try {
    const cbts = await getCbts();
    dispatch(getCbtsSuccess(cbts));
  } catch (error) {
    dispatch(getCbtsFailed(error));
  }
};

export const fetchQuestionsByCbtId = (cbtId: number): AppThunk => async (dispatch: AppDispatch) => {
  try {
    const questions = await getQuestions(cbtId);
    dispatch(getQuestionsSuccess(questions));
  } catch (error) {
    dispatch(getQuestionsFailed(error));
  }
};
