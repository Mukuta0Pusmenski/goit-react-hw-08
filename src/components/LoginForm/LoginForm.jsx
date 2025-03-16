import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    console.log('Login attempt:', { email, password }); // Логування даних

    const result = await dispatch(login({ email, password }));
    if (login.fulfilled.match(result)) {
      navigate('/contacts'); // Перенаправлення до контактів
    } else {
      console.error('Login failed:', result.error.message); // Логування помилки
      alert('Login failed: ' + result.error.message); // Повідомлення для користувача
    }
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Password:
        <input type="password" name="password" required />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
