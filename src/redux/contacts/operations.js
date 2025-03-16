// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// // Створення екземпляра axios
// const instance = axios.create({
//   baseURL: 'https://connections-api.goit.global',
// });

// // Отримати всі контакти
// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const response = await instance.get('/contacts');
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
//       const response = await instance.post('/contacts', contact);
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
//       await instance.delete(`/contacts/${contactId}`);
//       return contactId;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );


import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Отримати всі контакти
export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Додати новий контакт
export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
  try {
    const { data } = await axios.post('/contacts', contact);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Видалити контакт
export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
  try {
    await axios.delete(`/contacts/${contactId}`);
    return contactId;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Експорт усіх функцій
// export { fetchContacts, addContact, deleteContact };

