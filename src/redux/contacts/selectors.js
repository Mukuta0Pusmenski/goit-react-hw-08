// Вибір всіх контактів
export const selectContacts = state => state.contacts.items;

// Вибір статусу завантаження
export const selectLoading = state => state.contacts.loading;

// Вибір помилки
export const selectError = state => state.contacts.error;

// Додатковий селектор для фільтрованих контактів
import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
