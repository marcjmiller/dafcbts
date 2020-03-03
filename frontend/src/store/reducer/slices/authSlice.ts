import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isLoading: boolean,
  user: {
    userName: string,
    token: string,
  },
  error: Error | null,
};

const initialState: AuthState = {
  isLoading: false,
  user: {
    userName: '',
    token: '',
  },
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signInStart(state) {
      state.isLoading = true;
      state.error = null;
    },

    signInSuccess(state, action) {
      const { token, userName } = action.payload;

      state.user = { token, userName };
      state.isLoading = false;
      state.error = null;
    },

    signInFailure(state, action) {
      state.error = action.payload;
      state.user = {
        userName: '',
        token: '',
      };
      state.isLoading = false;
    },

    signOut(state) {
      state = initialState;
    }
  },
});

export const { signInStart, signInSuccess, signInFailure, signOut } = authSlice.actions;

export default authSlice.reducer;

export const InitAuthState = initialState;