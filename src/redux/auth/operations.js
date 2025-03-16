import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Встановлюємо базовий URL для запитів
axios.defaults.baseURL = 'https://connections-api.goit.global';

// Реєстрація користувача
export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
  try {
    console.log('Sending register payload:', credentials); // Логування даних
    const { data } = await axios.post('/users/signup', credentials);
    axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
    return data;
  } catch (error) {
    console.error('Register error:', error.response?.data || error.message); // Для діагностики
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

// Вхід у систему
export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
    return data;
  } catch (error) {
    console.error('Login error:', error.response?.data || error.message); // Для діагностики
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

// Вихід із системи
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    delete axios.defaults.headers.common['Authorization'];
  } catch (error) {
    console.error('Logout error:', error.response?.data || error.message); // Для діагностики
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

// Оновлення поточного користувача
export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.auth.token;

  if (!token) {
    return thunkAPI.rejectWithValue('No token available');
  }

  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {
    console.error('Refresh user error:', error.response?.data || error.message); // Для діагностики
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});
