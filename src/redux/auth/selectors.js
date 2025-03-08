// Вибір даних користувача
export const selectUser = state => state.auth.user;

// Вибір статусу авторизації
export const selectIsLoggedIn = state => state.auth.isLoggedIn;

// Вибір статусу оновлення (refresh)
export const selectIsRefreshing = state => state.auth.isRefreshing;

// Вибір токена
export const selectToken = state => state.auth.token;
