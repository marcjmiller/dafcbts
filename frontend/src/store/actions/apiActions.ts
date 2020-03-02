import { AppThunk } from '../store';
import { getCbtsFailed, getCbtsSuccess } from '../reducer/slices/cbtSlice';

const axios = require('axios').default;

export async function getCbts() {
  const url = 'api/cbts';
  const { data } = await axios.get(url);
  return data;
}

export const fetchAllCbts = (): AppThunk => async dispatch => {
  try {
    const cbts = await getCbts();
    dispatch(getCbtsSuccess(cbts));
  } catch (error) {
    dispatch(getCbtsFailed(error));
  }
};