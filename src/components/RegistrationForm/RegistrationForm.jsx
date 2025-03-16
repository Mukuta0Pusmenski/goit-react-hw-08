// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { register } from '../../redux/auth/operations';

// const RegistrationForm = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const name = form.elements.name.value;
//     const email = form.elements.email.value;
//     const password = form.elements.password.value;

//     console.log('Register attempt:', { name, email, password }); // Логування даних

//     const result = await dispatch(register({ name, email, password }));
//     if (register.fulfilled.match(result)) {
//       navigate('/contacts'); // Перенаправлення до контактів
//     } else {
//       console.error('Registration failed:', result.error.message); // Логування помилки
//       alert('Registration failed: ' + result.error.message); // Повідомлення для користувача
//     }
//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" name="name" placeholder="Name" required />
//       </label>
//       <label>
//         Email:
//         <input type="email" name="email" placeholder="Email" required />
//       </label>
//       <label>
//         Password:
//         <input type="password" name="password" placeholder="Password" required />
//       </label>
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default RegistrationForm;


import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../redux/auth/operations';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    console.log('Register attempt:', { name, email, password }); // Логування

    const result = await dispatch(register({ name, email, password }));
    if (register.fulfilled.match(result)) {
      navigate('/contacts'); // Перенаправлення до контактів
    } else {
      console.error('Registration failed:', result.error.message); // Логування
      alert('Registration failed: ' + result.error.message); // Повідомлення для користувача
    }
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" placeholder="Name" required />
      </label>
      <label>
        Email:
        <input type="email" name="email" placeholder="Email" required />
      </label>
      <label>
        Password:
        <input type="password" name="password" placeholder="Password" required />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
