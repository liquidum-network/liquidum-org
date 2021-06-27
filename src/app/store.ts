import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import type { RootState } from './rootReducer';
import type { ThunkAction } from 'redux-thunk';
import type { Action } from '@reduxjs/toolkit';
/** type imports */
// import type {  MiddlewareAPI } from '@reduxjs/toolkit';

// const logger = (store: any) => (next: any) => (action: any) => {
//   console.log('dispatching', action);
//   const result: any = next(action);
//   console.log('next state', store.getState());
//   return result;
// };
/** you can add more middleware if you want here */
const middleware = [...getDefaultMiddleware()];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const newRootReducer = require('./rootReducer').default;
    store.replaceReducer(newRootReducer);
  });
}

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
export type SyncAppThunk<T> = ThunkAction<T, RootState, unknown, Action<string>>;
export type AsyncAppThunk<T> = ThunkAction<Promise<T>, RootState, unknown, Action<string>>;
export default store;