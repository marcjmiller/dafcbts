import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { rootReducer, RootState } from './reducer';

export const store = configureStore({
  reducer: rootReducer,
});

// TODO: make sure this works, and remove it if it doesn't
//@ts-ignore
if (process.env.NODE_ENV === 'development' && module.hot) {
  //@ts-ignore
  module.hot.accept('./reducer/rootReducer', () => {
    const newRootReducer = require('./reducer/rootReducer').default;
    store.replaceReducer(newRootReducer);
  })
}

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

export type AppDispatch = typeof store.dispatch;