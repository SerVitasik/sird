import { configureStore, createSlice } from '@reduxjs/toolkit';

// Создаем slice для хранения состояния логина
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

// Экспортируем actions для использования в компонентах
export const { login, logout } = authSlice.actions;

// Создаем стор с использованием configureStore
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;