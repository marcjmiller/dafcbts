import { createSlice } from '@reduxjs/toolkit';
import { CbtModel } from '../../models/CbtModel';
import { axiosFetch } from '../actions/cbtActions';

interface CbtState {
  cbts: CbtModel[],
}

const initialState: CbtState = {
  cbts: [],
};

const cbtSlice = createSlice({
  name: 'cbt',
  initialState,
  reducers: {
    getCbts(state) {
      let cbtList: CbtModel[] = axiosFetch('api/cbts');
      state.cbts = cbtList;
    },
  },
});

export const { getCbts } = cbtSlice.actions;

export default cbtSlice.reducer;