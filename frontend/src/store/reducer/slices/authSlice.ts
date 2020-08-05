import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum AuthStep {
  INIT_STATE = 'INIT_STATE',
  LOGGING_IN = 'LOGGING_IN',
  LOGGED_IN = 'LOGGED_IN',
  LOGGED_OUT = 'LOGGED_OUT',
  LOGIN_FAILED = 'LOGIN_FAILED'
}

interface UserState {
  userName: string,
  token: string,
}

interface AuthState {
  authStep: AuthStep,
  user: UserState,
  error: Error | null,
}

const InitUserState: UserState = {
  userName: '',
  token: '',
};

const InitialState: AuthState = {
  authStep: AuthStep.INIT_STATE,
  user: InitUserState,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: InitialState,
  reducers: {
    signInStart(state) {
      state.error = null;
      state.authStep = AuthStep.LOGGING_IN;
    },

    signInSuccess(state, action: PayloadAction<UserState>) {
      const { token, userName } = action.payload;

      state.authStep = AuthStep.LOGGED_IN;
      state.user = { token, userName };
      state.error = null;
    },

    signInFailure(state, action: PayloadAction<Error>) {
      state.authStep = AuthStep.LOGIN_FAILED;
      state.user = {
        userName: '',
        token: '',
      };
      state.error = action.payload;
    },

    signOut(state) {
      state.authStep = AuthStep.LOGGED_OUT;
      state.user = InitUserState;
      state.error = null;
    },

    resetSignIn(state) {
      state.authStep = AuthStep.INIT_STATE;
    },
  },
});

export const { signInStart, signInSuccess, signInFailure, signOut, resetSignIn } = authSlice.actions;

export default authSlice.reducer;

export const InitAuthState = InitialState;