// Вибір всіх контактів
export const selectContacts = state => state.contacts.items;

// Вибір статусу завантаження
export const selectLoading = state => state.contacts.loading;

// Вибір помилки
export const selectError = state => state.contacts.error;
