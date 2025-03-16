import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.goit.global';

// Запит на реєстрацію
export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Запит на логін
export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Запит на вихід
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    delete axios.defaults.headers.common['Authorization'];
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Оновлення користувача
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
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Єдиний експорт функцій
export { register, login, logout, refreshUser };
