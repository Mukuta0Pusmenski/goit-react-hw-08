import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { refreshUser } from './redux/auth/operations.js';
import { selectIsRefreshing } from './redux/auth/selectors.js';
import Layout from './components/Layout/Layout.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage.jsx';
import ContactsPage from './pages/ContactsPage/ContactsPage.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute.jsx';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser()); // Оновлення користувача при завантаженні програми
  }, [dispatch]);

  return isRefreshing ? (
    <p>Loading...</p> // Показуємо спінер чи текст під час завантаже
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />} />
        <Route path="register" element={<RestrictedRoute component={<RegistrationPage />} redirectTo="/contacts" />} />
        <Route path="contacts" element={<PrivateRoute component={<ContactsPage />} redirectTo="/login" />} />
      </Route>
    </Routes>
  );
};

export default App;
