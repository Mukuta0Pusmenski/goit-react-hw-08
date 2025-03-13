import { createSlice } from '@reduxjs/toolkit';
import { logout } from '../auth/operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    // Додай тут свої ред'юсери, якщо вони потрібні, наприклад:
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    removeContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    // Очищення контактів при логауті
    builder.addCase(logout.fulfilled, (state) => {
      state.items = [];
      state.isLoading = false;
      state.error = null;
    });
  },
});

// Іменний експорт ред'юсера
export const contactsReducer = contactsSlice.reducer;

// Експорт за замовчуванням
export default contactsReducer;
