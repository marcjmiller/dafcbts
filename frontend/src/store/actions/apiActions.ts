import { getCbtsFailed, getCbtsSuccess } from '../reducer/slices/cbtSlice';
import { AppDispatch, AppThunk } from '../../resources/types';

const axios = require('axios').default;

export function getCbts() {
  const url = 'api/cbts';
  const { data } = axios.get(url);
  return data;
}

export const fetchAllCbts = (): AppThunk => async (dispatch: AppDispatch) => {
  try {
    const cbts = await getCbts();
    dispatch(getCbtsSuccess(cbts));
  } catch (error) {
    dispatch(getCbtsFailed(error));
  }
};