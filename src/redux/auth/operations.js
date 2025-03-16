// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://connections-api.goit.global';

// export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
//   try {
//     const { data } = await axios.post('/users/signup', credentials);
//     return data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
//   try {
//     const { data } = await axios.post('/users/login', credentials);
//     return data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//   try {
//     await axios.post('/users/logout');
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
//   const state = thunkAPI.getState();
//   const token = state.auth.token;

//   if (!token) return thunkAPI.rejectWithValue('No token available');

//   try {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//     const { data } = await axios.get('/users/current');
//     return data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });
// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://connections-api.goit.global';

// // Реєстрація користувача
// export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
//   try {
//     const { data } = await axios.post('/users/signup', credentials);
//     axios.defaults.headers.common.Authorization = `Bearer ${data.token}`; // Додаємо токен до заголовка
//     return data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// // Логін користувача
// export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
//   try {
//     const { data } = await axios.post('/users/login', credentials);
//     axios.defaults.headers.common.Authorization = `Bearer ${data.token}`; // Додаємо токен до заголовка
//     return data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// // Вихід користувача
// export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//   try {
//     await axios.post('/users/logout');
//     delete axios.defaults.headers.common.Authorization; // Видаляємо токен із заголовка
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// // Оновлення поточного користувача
// export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
//   const state = thunkAPI.getState();
//   const token = state.auth.token;

//   if (!token) return thunkAPI.rejectWithValue('No token available'); // Перевірка наявності токена

//   try {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`; // Встановлюємо токен для запиту
//     const { data } = await axios.get('/users/current');
//     return data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// // Запит на реєстрацію
// export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
//   try {
//     const response = await axios.post('/users/signup', credentials);
//     axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
//     return response.data; // Повертайте користувача та токен
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// // Запит на логін
// export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
//   try {
//     const response = await axios.post('/users/login', credentials);
//     axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
//     return response.data; // Повертайте користувача та токен
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// // Запит на оновлення користувача
// export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
//   const state = thunkAPI.getState();
//   const persistedToken = state.auth.token;

//   if (!persistedToken) {
//     return thunkAPI.rejectWithValue('No token available');
//   }

//   try {
//     axios.defaults.headers.common['Authorization'] = `Bearer ${persistedToken}`;
//     const response = await axios.get('/users/current');
//     return response.data; // Повертайте користувача
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Функція для логіна
export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const response = await axios.post('/users/login', credentials);
    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});


