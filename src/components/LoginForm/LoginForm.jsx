// // import React from 'react';
// // import { Formik, Form, Field, ErrorMessage } from 'formik';
// // import * as Yup from 'yup';
// // import styles from './LoginForm.module.css';

// // const LoginSchema = Yup.object().shape({
// //   email: Yup.string().email('Invalid email').required('Email is required'),
// //   password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
// // });

// // const LoginForm = () => {
// //   const handleSubmit = (values, { resetForm }) => {
// //     console.log('Login attempt:', values);
// //     resetForm();
// //   };

// //   return (
// //     <Formik
// //       initialValues={{ email: '', password: '' }}
// //       validationSchema={LoginSchema}
// //       onSubmit={handleSubmit}
// //     >
// //       {() => (
// //         <Form className={styles.form}>
// //           <label>
// //             Email:
// //             <Field type="email" name="email" className={styles.input} />
// //           </label>
// //           <ErrorMessage name="email" component="div" className={styles.error} />
// //           <label>
// //             Password:
// //             <Field type="password" name="password" className={styles.input} />
// //           </label>
// //           <ErrorMessage name="password" component="div" className={styles.error} />
// //           <button type="submit" className={styles.button}>Log In</button>
// //         </Form>
// //       )}
// //     </Formik>
// //   );
// // };

// // export default LoginForm;
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { login } from '../../redux/auth/operations';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import styles from './LoginForm.module.css';

// const LoginSchema = Yup.object().shape({
//   email: Yup.string().email('Invalid email').required('Email is required'),
//   password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
// });

// const LoginForm = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSubmit = async (values, { resetForm }) => {
//     const result = await dispatch(login(values));
//     if (login.fulfilled.match(result)) {
//       navigate('/contacts'); // Перенаправляє на контакти після успішного логіну
//     }
//     resetForm();
//   };

//   return (
//     <Formik
//       initialValues={{ email: '', password: '' }}
//       validationSchema={LoginSchema}
//       onSubmit={handleSubmit}
//     >
//       {() => (
//         <Form className={styles.form}>
//           <label>
//             Email:
//             <Field type="email" name="email" className={styles.input} />
//           </label>
//           <ErrorMessage name="email" component="div" className={styles.error} />
//           <label>
//             Password:
//             <Field type="password" name="password" className={styles.input} />
//           </label>
//           <ErrorMessage name="password" component="div" className={styles.error} />
//           <button type="submit" className={styles.button}>Log In</button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default LoginForm;


// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { login } from '../../redux/auth/operations';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import styles from './LoginForm.module.css';

// const LoginSchema = Yup.object().shape({
//   email: Yup.string().email('Invalid email').required('Email is required'),
//   password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
// });

// const LoginForm = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSubmit = async (values, { resetForm }) => {
//     const result = await dispatch(login(values));
//     if (login.fulfilled.match(result)) {
//       navigate('/contacts'); // Перенаправляє на контакти
//     }
//     resetForm();
//   };

//   return (
//     <Formik
//       initialValues={{ email: '', password: '' }}
//       validationSchema={LoginSchema}
//       onSubmit={handleSubmit}
//     >
//       {() => (
//         <Form className={styles.form}>
//           <label>
//             Email:
//             <Field type="email" name="email" className={styles.input} />
//           </label>
//           <ErrorMessage name="email" component="div" className={styles.error} />
//           <label>
//             Password:
//             <Field type="password" name="password" className={styles.input} />
//           </label>
//           <ErrorMessage name="password" component="div" className={styles.error} />
//           <button type="submit" className={styles.button}>Log In</button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default LoginForm;

import React from 'react';

const LoginForm = () => {
  return (
    <form>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;


