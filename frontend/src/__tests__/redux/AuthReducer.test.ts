import reducer, { InitAuthState, signInStart, signInSuccess, signInFailure, signOut } from '../../store/reducer/slices/authSlice';
import { Simulate } from 'react-dom/test-utils';
import error = Simulate.error;

describe('AuthReducer tests', () => {
  it('should return the initial state', () => {
    const result = reducer(undefined, { type: '' });

    expect(result).toEqual(InitAuthState);
  });

  it('should change loading/error states when requests are made', () => {
    const nextState = reducer(InitAuthState, signInStart());

    expect(nextState.user.token !== '').toEqual(false);
    expect(nextState.isLoading).toBeTruthy();
    expect(nextState.error).toBeNull();
  });

  it('should set loading/error and user info on successful sign in', () => {
    const payload = { token: 'A wild token appears', userName: 'BillyBob' };
    const nextState = reducer(InitAuthState, signInSuccess(payload));

    expect(nextState.user.token !== '').toBeTruthy();
    expect(nextState.user.userName).toEqual('BillyBob');
    expect(nextState.isLoading).toBeFalsy();
    expect(nextState.error).toBeNull();
  });

  it('should set loading/error and user info on failed sign in', () => {
    const error = 'Incorrect Password';
    const nextState = reducer(InitAuthState, signInFailure(error));

    expect(nextState.user.token !== '').toBeFalsy();
    expect(nextState.user.userName).toEqual('');
    expect(nextState.isLoading).toBeFalsy();
    expect(nextState.error).toEqual(error)
  });

  it('should reset loading/error and user info on sign out', () => {
    const nextState = reducer(InitAuthState, signOut());

    expect(nextState.user.token === '').toBeTruthy();
    expect(nextState.user.userName).toEqual('');
    expect(nextState.isLoading).toBeFalsy();
    expect(nextState.error).toBeNull();
  });
});