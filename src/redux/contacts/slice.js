// import { createSlice } from '@reduxjs/toolkit';
// import { logout } from '../auth/operations';

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   reducers: {
//     addContact: (state, action) => {
//       state.items.push(action.payload);
//     },
//     removeContact: (state, action) => {
//       state.items = state.items.filter(contact => contact.id !== action.payload);
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(logout.fulfilled, (state) => {
//       state.items = [];
//       state.isLoading = false;
//       state.error = null;
//     });
//   },
// });

// export const contactsReducer = contactsSlice.reducer;

// export default contactsReducer;

import { fetchContacts, addContact, deleteContact } from './operations';

extraReducers: (builder) => {
  builder
    .addCase(fetchContacts.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    })
    .addCase(fetchContacts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(addContact.fulfilled, (state, action) => {
      state.items.push(action.payload);
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    });
}

const contactsReducer = contactsSlice.reducer;
export default contactsReducer;

