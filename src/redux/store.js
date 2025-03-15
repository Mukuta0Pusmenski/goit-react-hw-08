import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/slice';
import contactsReducer from './contacts/slice';
import filtersReducer from './filters/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer, // Відповідає за стан авторизації
    contacts: contactsReducer, // Відповідає за контакти
    filters: filtersReducer, // Відповідає за фільтри
  },
});
