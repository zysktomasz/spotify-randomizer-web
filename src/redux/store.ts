import { configureStore } from '@reduxjs/toolkit';
import throttle from 'lodash.throttle';
import { loadState, saveState } from './localStorage';
import userReducer from './userSlice';

const persistedState = loadState();
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(
  throttle(() => {
    saveState({
      user: store.getState().user,
    });
  }, 1000),
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
