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
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    removeContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout.fulfilled, (state) => {
      state.items = [];
      state.isLoading = false;
      state.error = null;
    });
  },
});

export const contactsReducer = contactsSlice.reducer;

export default contactsReducer;
