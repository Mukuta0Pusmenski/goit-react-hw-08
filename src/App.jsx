import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/AppBar/AppBar';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/register" element={<RestrictedRoute component={RegistrationPage} redirectTo="/contacts" />} />
      <Route path="/login" element={<RestrictedRoute component={LoginPage} redirectTo="/contacts" />} />
      <Route path="/contacts" element={<PrivateRoute component={ContactsPage} />} />
    </Route>
  </Routes>
);

export default App;
