import { getCbtsFailed, getCbtsSuccess } from '../reducer/slices/cbtSlice';
import { AppDispatch, AppThunk } from '../../resources/types';
import { CbtModel } from '../../models/CbtModel';
import { AxiosResponse } from 'axios';

const axios = require('axios').default;

export function getCbts(): CbtModel[] {
  const url = 'api/cbts';
  return axios.get(url)
    .then((response: AxiosResponse) => {
      return response.data
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