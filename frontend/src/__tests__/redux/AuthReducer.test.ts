import reducer, {
  AuthStep,
  InitAuthState,
  signInFailure,
  signInStart,
  signInSuccess,
  signOut,
} from '../../store/reducer/slices/authSlice';

describe('AuthReducer tests', () => {
  it('should return the initial state', () => {
    const result = reducer(undefined, { type: '' });

    expect(result).toEqual(InitAuthState);
  });

  it('should change loading/error states when requests are made', () => {
    const nextState = reducer(InitAuthState, signInStart());

    expect(nextState.user.token !== '').toEqual(false);
    expect(nextState.authStep).toEqual(AuthStep.LOGGING_IN);
    expect(nextState.error).toBeNull();
  });

  it('should set loading/error and user info on successful login', () => {
    const payload = { token: 'A wild token appears', userName: 'BillyBob' };
    const nextState = reducer(InitAuthState, signInSuccess(payload));

    expect(nextState.user.token !== '').toBeTruthy();
    expect(nextState.user.token === 'A wild token appears').toBeTruthy();
    expect(nextState.user.userName).toEqual('BillyBob');
    expect(nextState.authStep).toEqual(AuthStep.LOGGED_IN);
    expect(nextState.error).toBeNull();
  });

  it('should set loading/error and user info on failed login', () => {
    const error = Error('Incorrect Password');
    const nextState = reducer(InitAuthState, signInFailure(error));

    expect(nextState.user.token !== '').toBeFalsy();
    expect(nextState.user.userName).toEqual('');
    expect(nextState.authStep).toEqual(AuthStep.LOGIN_FAILED);
    expect(nextState.error).toEqual(error);
  });

  it('should reset loading/error and user info on logout', () => {
    const nextState = reducer(InitAuthState, signOut());

    expect(nextState.user.token === '').toBeTruthy();
    expect(nextState.user.userName).toEqual('');
    expect(nextState.error).toBeNull();
    expect(nextState.authStep).toEqual(AuthStep.LOGGED_OUT);
  });
});