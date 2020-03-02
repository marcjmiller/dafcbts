import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CbtModel } from '../../../models/CbtModel';

interface CbtState {
  cbts: CbtModel[],
  error: string | null,
  loading: boolean,
}

const initialState: CbtState = {
  cbts: [],
  error: null,
  loading: true
};

const cbtSlice = createSlice({
    name: 'cbt',
    initialState,
    reducers: {
      getCbtsSuccess(state, action: PayloadAction<CbtModel[]>) {
        state.cbts = action.payload;
        state.loading = false;
      },

      getCbtsFailed(state, action: PayloadAction<string>) {
        state.error = action.payload;
        state.loading = false;
      },

    },
  },
);

export const { getCbtsSuccess, getCbtsFailed } = cbtSlice.actions;

export default cbtSlice.reducer;