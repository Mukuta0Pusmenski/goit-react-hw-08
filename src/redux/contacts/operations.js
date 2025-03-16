// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Налаштування базового URL для бекенду
// axios.defaults.baseURL = 'https://connections-api.goit.global';

// // Отримати всі контакти
// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/contacts');
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// // Додати новий контакт
// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (contact, thunkAPI) => {
//     try {
//       const response = await axios.post('/contacts', contact);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// // Видалити контакт
// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (contactId, thunkAPI) => {
//     try {
//       await axios.delete(`/contacts/${contactId}`);
//       return contactId;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// axios.defaults.baseURL = 'https://connections-api.goit.global';

// // Отримати всі контакти
// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/contacts');
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// // Додати новий контакт
// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (contact, thunkAPI) => {
//     try {
//       const response = await axios.post('/contacts', contact);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// // Видалити контакт
// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (contactId, thunkAPI) => {
//     try {
//       await axios.delete(`/contacts/${contactId}`);
//       return contactId;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

import axios from 'axios';

// Створення екземпляра axios із базовим URL
const instance = axios.create({
  baseURL: 'https://connections-api.goit.global',
});

// Отримати всі контакти
export const fetchContacts = async () => {
  try {
    const response = await instance.get('/contacts');
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Додати новий контакт
export const addContact = async (contact) => {
  try {
    const response = await instance.post('/contacts', contact);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Видалити контакт
export const deleteContact = async (contactId) => {
  try {
    await instance.delete(`/contacts/${contactId}`);
    return contactId;
  } catch (error) {
    throw new Error(error.message);
  }
};
