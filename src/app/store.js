import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/loginSlice';
import chatReducer from '../features/chatSlice';
export const store = configureStore({
  reducer: {
    login: loginReducer,
    chat: chatReducer
  },
});
