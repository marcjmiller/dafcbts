import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { rootReducer } from './reducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredPaths
    }
  })
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./reducer/rootReducer', () => {
    const newRootReducer = require('./reducer/rootReducer').default;
    store.replaceReducer(newRootReducer);
  });
}