import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import { refreshUser } from './redux/auth/operations'; // Операція для оновлення користувача
import { selectIsRefreshing } from './redux/auth/selectors'; // Селектор для перевірки стану

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing); // Чи виконується refresh

  // Оновлюємо користувача (якщо є токен)
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Головна сторінка */}
        <Route index element={<HomePage />} />

        {/* Публічні маршрути */}
        <Route
          path="/register"
          element={<RestrictedRoute component={RegistrationPage} redirectTo="/contacts" />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={LoginPage} redirectTo="/contacts" />}
        />

        {/* Приватний маршрут */}
        <Route
          path="/contacts"
          element={<PrivateRoute component={ContactsPage} />}
        />
      </Route>
    </Routes>
  );
};

export default App;
