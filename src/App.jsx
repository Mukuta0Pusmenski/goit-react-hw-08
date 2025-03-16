import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { refreshUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import ContactsPage from './pages/ContactsPage';
import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser()); // Оновлення користувача при завантаженні програми
  }, [dispatch]);

  return isRefreshing ? (
    <p>Loading...</p> // Показуємо спінер чи текст під час завантаження
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
